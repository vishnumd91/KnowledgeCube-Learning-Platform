import express from "express";
import {
  authenticateUser,
  registerUser,
} from "../controller/auth-controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", authenticateUser);

export default router;
