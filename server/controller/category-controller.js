import mongoose from "mongoose";
import { categories } from "../constants/index.js";
import { Category } from "../models/index.js";

export const addCategories = async (req, res) => {
  try {
    await Category.deleteMany({});
    // Same process can be done using insertMany(categories)
    const newCategory = await Category.create(categories);
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const getCategoriesById = async (req, res) => {
  try {
    const categoryById = req.params.id;
    const receivedCategory = await Category.findById(categoryById);
    if (!receivedCategory) {
      return res
        .status(404)
        .json({ message: `No category with ${categoryById} found` });
    }
    return res.status(200).json(receivedCategory);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteAllCategories = async (req, res) => {
  try {
    const categoryCount = Category.find();
    if (!categoryCount.length) {
      return res
        .status(404)
        .json({ message: `No categories available to delete` });
    }
    await Category.deleteMany({});
    return res
      .status(201)
      .json({ message: "Deleted All categories Successfully" });
  } catch (error) {
    return res.status(404).json({ message: "Deletion Failed" });
  }
};

export const deleteCategoryById = async (req, res) => {
  const categoryById = req.params.id;
  if (mongoose.Types.ObjectId.isValid(categoryById)) {
    await Category.findByIdAndRemove(categoryById);
    return res
      .status(201)
      .json(`Category with ${categoryById} deleted successfully`);
  }
  return res.status(404).json({ message: `No id with ${categoryById} found` });
};
