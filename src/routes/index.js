import express from "express";
import taskRoutes from "./taskRoutes.js";
import classificationRoutes from "./classificationRoutes.js";

const routes = (app) => {
  app.use(express.json());

  app.get("/", (req, res) => {
    res.status(200).send("Personal Habit Tracker");
  });

  app.use(taskRoutes);
  app.use(classificationRoutes);
};

export default routes;