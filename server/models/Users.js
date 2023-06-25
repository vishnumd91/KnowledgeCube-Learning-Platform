import mongoose from "mongoose";

// Users Collection Schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
    unique: true,
  },
  password: {
    type: String,
    default: "",
    unique: true,
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
