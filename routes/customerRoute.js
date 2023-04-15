import express from "express";
const router = express.Router();
import {
  createCustomer,
  getCustomer,
  getCustomers,
  editCustomer,
  deleteCustomer,
  loginCustomer
} from "../controllers/customerController.js";
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post("/", createCustomer);
router.get("/:id",verifyToken, getCustomer);
router.get("/",verifyToken,isGeneralAdmin, getCustomers);
router.patch("/:id", editCustomer);
router.delete("/:id",verifyToken,isGeneralAdmin, deleteCustomer);
router.post("/login",loginCustomer)
export default router;
