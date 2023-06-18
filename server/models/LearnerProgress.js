import mongoose from "mongoose";

// LearnerProgress Collection Schema
const learnerProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lesson: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  completed: Boolean,
  timestamp: Date,
});

export const LearnerProgress = mongoose.model(
  "LearnerProgress",
  learnerProgressSchema
);
