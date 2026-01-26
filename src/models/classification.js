import mongoose from "mongoose";

const classificationSchema = new mongoose.Schema(
  {
    completed: { type: Boolean, required: true },
    color: { type: String },
    tag: { type: String }
  },
  {
    versionKey: false,
    collection: "classifications"
  }
);

const Classification = mongoose.model(
  "Classification",
  classificationSchema
);

export default Classification;
export { classificationSchema };