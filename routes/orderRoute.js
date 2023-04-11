import express from "express";
const router = express.Router();
import {
  createOrder,
  getOrder,
  getOrders,
  editOrder,
  deleteOrder
} from "../controllers/OrderController.js";

router.post("/", createOrder);
router.get("/:id", getOrder);
router.get("/", getOrders);
router.patch("/:id",editOrder)
router.delete('/:id',deleteOrder)
export default router;
