import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";

import { router } from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 8080;

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
dotenv.config();
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
