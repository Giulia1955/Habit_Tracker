import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/tasks", TaskController.listTask);
router.get("/tasks/searchcolor", TaskController.searchByColor)
router.get("/tasks/:id", TaskController.listIdTask);
router.post("/tasks", TaskController.createTask);
router.put("/tasks/:id", TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);

export default router;