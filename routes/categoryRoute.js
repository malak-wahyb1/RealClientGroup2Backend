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

router.post("/", uploadImage, createCategory);
router.get("/:id", getCategory);
router.get("/", getCategories);
router.patch("/:id",uploadImage,editCategory)
router.delete('/:id',deleteCategory)
export default router;
