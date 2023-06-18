import mongoose from "mongoose";

// Users Collection Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  profilePicture: String,
});

export const User = mongoose.model("User", userSchema);
