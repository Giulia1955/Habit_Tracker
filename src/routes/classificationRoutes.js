import express from "express";
import ClassificationController from "../controllers/classificationController.js";

const router = express.Router();

router
  .get("/classifications", ClassificationController.listarClassifications)
  .get("/classifications/:id", ClassificationController.listarClassificationPorId)
  .post("/classifications", ClassificationController.cadastrarClassification)
  .put("/classifications/:id", ClassificationController.atualizarClassification)
  .delete("/classifications/:id", ClassificationController.excluirClassification);

export default router;
