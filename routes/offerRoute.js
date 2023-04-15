import express from "express";
const router = express.Router();
import {
  createOffer,
  getOffer,
  getOffers,
  editOffer,
  deleteOffer
} from "../controllers/offerController.js";
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post("/",verifyToken,isGeneralAdmin, createOffer);
router.get("/:id", getOffer);
router.get("/", getOffers);
router.patch("/:id",verifyToken,isGeneralAdmin,editOffer)
router.delete('/:id',verifyToken,isGeneralAdmin,deleteOffer)
export default router;
