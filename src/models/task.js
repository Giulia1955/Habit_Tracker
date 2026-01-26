import mongoose from "mongoose";
import { classificationSchema } from "./classification.js";

const taskSchema = new mongoose.Schema(
  {
    nameTask: { type: String, required: true },
    urgency: Boolean,
    description: String,
    deadline: String,
    classification: classificationSchema
  },
  {
    collection: "tasks"
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;