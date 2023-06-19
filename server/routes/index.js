import { Router } from "express";
import categoryRoutes from "./category.js";

const router = Router();

router.use("/categories", categoryRoutes);

export { router };
