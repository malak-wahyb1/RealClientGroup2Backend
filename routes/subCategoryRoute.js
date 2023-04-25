import {addSubCategory,getSubCategories,getSubCategory,editSubCategory,deleteSubCategory,getSubCategoryByCategory} from '../controllers/subCategoryController.js'
import express from 'express'
const router=express.Router();
import { isGeneralAdmin, verifyToken } from '../middleware/auth.js';

router.post('/',addSubCategory)
router.get("/",getSubCategories)
router.get('/:id',getSubCategory)
router.patch('/:id',verifyToken,isGeneralAdmin,editSubCategory)
router.delete("/:id",verifyToken,isGeneralAdmin,deleteSubCategory)
router.get('/category/:id',getSubCategoryByCategory)


export default router