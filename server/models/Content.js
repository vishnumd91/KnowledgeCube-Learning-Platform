import mongoose from "mongoose";

// Content Collection Schema
const contentSchema = new mongoose.Schema({
  type: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  title: String,
  contentURL: String,
});

export const Content = mongoose.model("Content", contentSchema);
