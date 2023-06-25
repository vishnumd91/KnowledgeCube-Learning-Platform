import express from "express";
import { addCourse, getCourseById, getCourses } from "../controller/index.js";
import { userAuthentication } from "../middleware/authentication.js";

const router = express.Router();

router.use(userAuthentication);
router.post("/add", addCourse);
router.get("/", getCourses);
router.get("/:id", getCourseById);

export default router;
