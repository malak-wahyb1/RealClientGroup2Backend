import express from "express";
const router = express.Router();
import {
  getNewsLetters,
  getNewsLetter,
  deleteNewsLetter,
  AddNewsLetter,
} from "../controllers/newsLetterController.js";

router.post("/", AddNewsLetter);
router.get("/", getNewsLetters);
router.get("/:id", getNewsLetter);
router.delete("/:id", deleteNewsLetter);

export default router;
