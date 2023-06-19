import mongoose from "mongoose";

// Categories Collection Schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

export const Category = mongoose.model("Category", categorySchema);
