import { Router } from "express";
import { calculate } from "../controllers/calculate.controller.js";
import multer from "multer"
import upload from "../middleware/multer.js";
import authenticateToken from "../middleware/auth.middleware.js";
const router =Router();

router.post(`/calculate`,authenticateToken,calculate);
export default router;