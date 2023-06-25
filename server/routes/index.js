import { Router } from "express";
import categoryRoutes from "./category.js";
import courseRoutes from "./course.js";
import authRoutes from "./auth.js";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);
router.use("/auth", authRoutes);

export { router };
