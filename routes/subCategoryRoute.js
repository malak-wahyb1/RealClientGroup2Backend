import {addSubCategory,getSubCategories,getSubCategory,editSubCategory,deleteSubCategory} from '../controllers/subCategoryController.js'
import express from 'express'
const router=express.Router();

router.post('/',addSubCategory)
router.get("/",getSubCategories)
router.get('/:id',getSubCategory)
router.patch('/:id',editSubCategory)
router.delete("/:id",deleteSubCategory)
export default router