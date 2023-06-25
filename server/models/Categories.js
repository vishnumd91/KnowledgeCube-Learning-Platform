import mongoose from "mongoose";
import { courseSchema } from "./Courses.js";

// Categories Collection Schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  courses: [courseSchema],
});

export const Category = mongoose.model("Category", categorySchema);
