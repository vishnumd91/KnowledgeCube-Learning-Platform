import { Course } from "../models/index.js";
import { getUnixTimestamp } from "../utils/index.js";

export const addCourse = async (req, res) => {
  try {
    const course = req.body;
    const newCourse = await Course.create(course);
    return res.status(201).json(newCourse);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    if (!courses.length) {
      return res.status(404).json({ message: "No courses to display" });
    }
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ message: `No course with ${courseId} found` });
    }
    const { createdAt, updatedAt } = course;
    const createdAt_unix = getUnixTimestamp(createdAt);
    const updatedAt_unix = getUnixTimestamp(updatedAt);
    return res
      .status(200)
      .json({ ...course._doc, createdAt_unix, updatedAt_unix });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
