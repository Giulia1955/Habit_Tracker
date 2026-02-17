import mongoose from "mongoose";

const classificationSchema = new mongoose.Schema(
  {
    id: { type: String },
    completed: { type: Boolean, required: true },
    color: { type: String },
    tag: { type: String }
  },
  {
    versionKey: false
  }
);

const classifications = mongoose.model("classifications", classificationSchema);

export default classifications;
export { classificationSchema };
