import express from "express";
const router = express.Router();
import {
  createOrder,
  getOrder,
  getOrders,
  editOrder,
  deleteOrder
} from "../controllers/orderController.js";
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post("/",verifyToken, createOrder);
router.get("/:id",verifyToken, getOrder);
router.get("/",verifyToken,isGeneralAdmin, getOrders);
router.patch("/:id",verifyToken,isGeneralAdmin,editOrder)
router.delete('/:id',verifyToken,isGeneralAdmin,deleteOrder)
export default router;
