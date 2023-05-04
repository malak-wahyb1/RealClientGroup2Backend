import express from "express";
const router = express.Router();
import {
  createContact,
  getContacts,
  getContact,
  deleteContact,
  editContact,
} from "../controllers/contactController.js";

import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post("/", createContact);
router.get("/",verifyToken, isGeneralAdmin,getContacts);
router.get("/:id",verifyToken,isGeneralAdmin, getContact);
router.delete("/:id",verifyToken,isGeneralAdmin, deleteContact);
router.patch("/:id",verifyToken,isGeneralAdmin, editContact);

export default router;