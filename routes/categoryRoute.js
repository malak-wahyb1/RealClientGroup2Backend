import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategory,
  getCategories,
  editCategory,
  deleteCategory
} from "../controllers/categoryController.js";
import uploadImage from "../middleware/image.js";
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post("/", verifyToken,isGeneralAdmin,uploadImage, createCategory);
router.get("/:id", getCategory);
router.get("/", getCategories);
router.patch("/:id",verifyToken,isGeneralAdmin,uploadImage,editCategory)
router.delete('/:id',verifyToken,isGeneralAdmin,deleteCategory)
export default router;
