import mongoose from "mongoose";

// Reviews Collection Schema
const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  content: String,
  rating: Number,
  timestamp: Date,
});

export const Review = mongoose.model("Review", reviewSchema);
