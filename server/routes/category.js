import express from "express";
import {
  addCategories,
  deleteAllCategories,
  deleteCategoryById,
  getCategories,
  getCategoriesById,
} from "../controller/index.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoriesById);
router.post("/add", addCategories);
router.delete("/:id", deleteCategoryById);
router.delete("/", deleteAllCategories);

export default router;
