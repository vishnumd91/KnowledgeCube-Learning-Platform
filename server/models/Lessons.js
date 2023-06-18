import mongoose from "mongoose";

// Lessons Collection Schema
const lessonSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  title: String,
  description: String,
  videoURL: String,
  textContent: String,
  quizQuestions: [mongoose.Schema.Types.Mixed],
});

export const Lesson = mongoose.model("Lesson", lessonSchema);
