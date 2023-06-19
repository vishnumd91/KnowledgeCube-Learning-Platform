import mongoose from "mongoose";
import { getUnixTimestamp } from "../utils/index.js";

// Courses Collection Schema
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    duration: {
      type: Number,
      required: true,
    },
    difficultyLevel: {
      type: String,
      required: true,
    },
    price: Number,
    ratings: {
      type: [Number],
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema);
