import express from "express";
import { addCourse, getCourseById, getCourses } from "../controller/index.js";

const router = express.Router();

router.post("/add", addCourse);
router.get("/", getCourses);
router.get("/:id", getCourseById);

export default router;
