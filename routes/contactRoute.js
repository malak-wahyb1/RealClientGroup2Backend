import express from "express";
const router = express.Router();
import {
  createContact,
  getContacts,
  getContact,
  deleteContact,
  editContact,
} from "../controllers/contactController.js";


router.post("/", createContact);
router.get("/", getContacts);
router.get("/:id", getContact);
router.delete("/:id", deleteContact);
router.patch("/:id", editContact);

export default router;