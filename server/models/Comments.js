import mongoose from "mongoose";

// Comments Collection Schema
const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  content: String,
  timestamp: Date,
});

export const Comment = mongoose.model("Comment", commentSchema);
