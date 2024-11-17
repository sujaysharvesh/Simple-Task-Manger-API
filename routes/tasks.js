import express from "express";
import { createItems, deleteItem, getAllItems, getsingleItem, updateItem } from "../controllers/taskControllers.js"

const router = express.Router();

router.route("/").get(getAllItems).post(createItems)
router.route("/:id").get(getsingleItem).patch(updateItem).delete(deleteItem)

export default router;