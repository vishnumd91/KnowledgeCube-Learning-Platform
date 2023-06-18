import mongoose from "mongoose";

// Enrollments Collection Schema
const enrollmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  progress: Number,
  completionStatus: Boolean,
});

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
