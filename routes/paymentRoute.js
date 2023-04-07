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

router.post("/", uploadImage, createPayment);
router.get("/", getPayments);
router.get("/:id", getPayment);
router.delete("/:id", deletePayment);
router.patch("/:id", uploadImage, editPayment);

export default router;
