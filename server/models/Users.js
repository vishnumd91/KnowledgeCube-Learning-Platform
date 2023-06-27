import mongoose from "mongoose";

// Users Collection Schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    default: "",
  },
  role: {
    type: String,
    enum: ["student", "instructor"],
    default: "student",
  },
  profilePicture: {
    type: String,
    default: "",
  },
});

export const User = mongoose.model("User", userSchema);
