
import express from "express";
import controller from "../controllers/productController.js";
import uploadImage from "../middleware/image.js";
const router = express.Router();
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';
import { getAll } from "../controllers/allSchemas.js";
router.get('/getOnlyFour',controller.getFourProductOnly)
router.get("/getAll",getAll)

router.get("/byId/:id", controller.getById);
router.get("/", controller.getAll);
router.get("/:name", controller.getByName);
router.get("/subcategory/:id", controller.getSubCategory);
router.post("/",uploadImage,  controller.addProduct);
router.put("/:id",verifyToken,isGeneralAdmin, uploadImage,controller.editProduct);
router.delete("/:id", verifyToken,isGeneralAdmin, controller.deleteProduct);
export default router;

