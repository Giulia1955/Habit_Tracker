import mongoose from "mongoose";
import { classificationSchema } from "./classification.js";

const taskSchema = new mongoose.Schema(
  {
    id: { type: String },
    nameTask: { type: String, required: true },
    urgency: { type: Boolean },
    description: { type: String },
    deadline: { type: String },
    classification: classificationSchema
  }
);

const tasks = mongoose.model("tasks", taskSchema);

export default tasks;
