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

router.post("/",verifyToken, createContact);
router.get("/",isGeneralAdmin, isGeneralAdmin,getContacts);
router.get("/:id",isGeneralAdmin, getContact);
router.delete("/:id",isGeneralAdmin, deleteContact);
router.patch("/:id",isGeneralAdmin, editContact);

export default router;