import express from "express"
import ClassificationController from "../controllers/classificationController.js"

const routes = express.Router();

routes.get("/classifications", ClassificationController.listClassifications);
routes.get("/classifications/:id", ClassificationController.listClassificationById);
routes.post("/classifications", ClassificationController.createClassification);
routes.put("/classifications/:id", ClassificationController.updateClassification);
routes.delete("/classifications/:id", ClassificationController.deleteClassification);

export default routes;