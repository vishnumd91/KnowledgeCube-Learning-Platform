import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import rotatingFileStream from "rotating-file-stream";

import { connectDB } from "./config/db.js";

import { router } from "./routes/index.js";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Define log file options for rotation and compression
const logDirectory = path.join(process.cwd(), "logs");
const accessLogStream = rotatingFileStream.createStream("access.log", {
  interval: "1d", // Rotate daily
  path: logDirectory,
  compress: "gzip", // Compress rotated logs using gzip
});

// Create the log directory if it doesn't exist
fs.mkdirSync(logDirectory, { recursive: true });

// Set up Morgan to log to both the file and the console
app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan("combined")); // Log to console

// Middleware and configurations
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
app.options("*", cors());
app.use(express.json());
app.use(cookieParser());
// Organize Static assets
app.use(express.static("build"));

// Mount the router
app.use("/api", router);

// Serve the React app's index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// This will start the server and listen to the port defined in ENV.
app.listen(PORT, () => {
  console.log("Server Running Successfully");
});

// Connect to MongoDB Atlas server
connectDB();
