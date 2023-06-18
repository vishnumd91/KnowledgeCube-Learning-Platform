import mongoose from "mongoose";

// Transactions Collection Schema
const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  paymentInformation: mongoose.Schema.Types.Mixed,
  timestamp: Date,
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
