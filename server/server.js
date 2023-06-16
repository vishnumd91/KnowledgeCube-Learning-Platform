import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 8080;

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
app.use(express.static("public"));

app.use("/", (req, res) => res.send("Server is Up and Running"));

// This will start the server and listen to the port defined in ENV.
app.listen(process.env.PORT, () => {
  console.log("Server Running Successfully");
});

// Connect to MongoDB Atlas server
connectDB();
