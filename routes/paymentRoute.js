import express from "express";
const router = express.Router();
import {
  createPayment,
  getPayments,
  getPayment,
  deletePayment,
  editPayment,
} from "../controllers/paymentController.js";
import uploadImage from "../middleware/image.js";
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post("/",verifyToken,isGeneralAdmin, uploadImage, createPayment);
router.get("/", getPayments);
router.get("/:id", getPayment);
router.delete("/:id",verifyToken,isGeneralAdmin, deletePayment);
router.patch("/:id", verifyToken,isGeneralAdmin,uploadImage, editPayment);

export default router;
