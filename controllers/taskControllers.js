import Tasks from "../models/tasks.js";
import { asyncWrapper } from "../middleware/asyncWrapper.js";
import { createCustomError } from "../errors/custom-errors.js";


export const getAllItems = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find();
  res.status(200).json({ tasks });
});

export const getsingleItem = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await Tasks.findById(id);
    if (!task) {
      return next(createCustomError("Task not found", 404))
    }
    res.status(200).json({ task });
  });

export const updateItem = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Tasks.findByIdAndUpdate(id, req.body);
  if (!task) {
    return next(createCustomError("Task not found", 404))
  }
  res.status(200).json({ task });
});

export const deleteItem = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;
    const task = await Tasks.findByIdAndDelete(id);
    if (!task) {
      return next(createCustomError("Task not found", 404))
    }
    res.status(200).json({ message: "Task deleted" });
});

export const createItems = asyncWrapper(async (req, res) => {
    const task = await Tasks.create(req.body);
    res.status(200).json({ message: task });
});
