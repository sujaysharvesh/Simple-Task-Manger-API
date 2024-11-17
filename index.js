import express from "express";
import Router from "./routes/tasks.js";
import Mongoose  from "mongoose";
import dotenv from "dotenv";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
dotenv.config();

// Middleware for parsing JSON
app.use(express.json());

// Mount the router
app.use("/api/v1/tasks", Router);
app.use(notFound);
app.use(errorHandler);

// Start the server
const Port = process.env.PORT || 5000;
const startServer = async() => {
    try {
        await Mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
        app.listen(Port, () => {
            console.log(`Server is running on port ${Port}`);
        });
    }
    catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

startServer();
