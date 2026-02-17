import express from "express";
import TaskController from "../controllers/taskController.js";

const router = express.Router();

router
  .get("/tasks", TaskController.listarTasks)
  .get("/tasks/:id", TaskController.listarTaskPorId)
  .post("/tasks", TaskController.cadastrarTask)
  .put("/tasks/:id", TaskController.atualizarTask)
  .delete("/tasks/:id", TaskController.excluirTask)
  .get("/tasks/busca/cor", TaskController.listarTaskPorCor);

export default router;
