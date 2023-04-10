import express from "express";
const router = express.Router();
import {
  createOffer,
  getOffer,
  getOffers,
  editOffer,
  deleteOffer
} from "../controllers/OfferController.js";

router.post("/", createOffer);
router.get("/:id", getOffer);
router.get("/", getOffers);
router.patch("/:id",editOffer)
router.delete('/:id',deleteOffer)
export default router;
