import { Router } from "express";
import categoryRoutes from "./category.js";
import courseRoutes from "./course.js";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/courses", courseRoutes);

export { router };
