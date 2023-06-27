import mongoose from "mongoose";
import { getUnixTimestamp } from "../utils/index.js";

// Courses Collection Schema
export const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
      required: true,
    },
    description: {
      type: String,
      default: "",
      required: true,
    },
    category: {
      type: String,
      default: "",
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
      default: "beginner",
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
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
