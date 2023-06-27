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
    next(error);
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    // .populate('courses')
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const getCategoriesById = async (req, res, next) => {
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
    next(error);
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
    next(error);
  }
};

export const deleteCategoryById = async (req, res) => {
  const isCategoryAvailable = await Category.findById(req.params.id);
  if (!isCategoryAvailable) {
    return res
      .status(404)
      .json({ message: `No id with ${req.params.id} found` });
  }
  await Category.findByIdAndRemove(req.params.id);
  return res
    .status(201)
    .json(`Category with ${req.params.id} deleted successfully`);
};
