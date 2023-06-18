import mongoose from "mongoose";

// Courses Collection Schema
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  duration: Number,
  difficultyLevel: String,
  price: Number,
  ratings: [Number],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

export const Course = mongoose.model("Course", courseSchema);
