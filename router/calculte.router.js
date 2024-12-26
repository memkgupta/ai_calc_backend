import { Router } from "express";
import { calculate } from "../controllers/calculate.controller.js";
import multer from "multer"
import upload from "../middleware/multer.js";
const router =Router();

router.post(`/calculate`,upload.single('file'),calculate);
export default router;