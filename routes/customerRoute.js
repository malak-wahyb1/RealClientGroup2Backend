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

router.post("/", createCustomer);
router.get("/:id", getCustomer);
router.get("/", getCustomers);
router.patch("/:id", editCustomer);
router.delete("/:id", deleteCustomer);
router.post("/login",loginCustomer)
export default router;
