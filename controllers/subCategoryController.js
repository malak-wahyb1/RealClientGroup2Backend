import SubCategory from '../models/subCategoryModel.js';
export function addSubCategory(req, res, next) {
    console.log(req.body);
   const subCategory= new SubCategory(req.body);
    subCategory.save()
    .then((response)=>{
        res.status(200).send({status:200,message:response})
    })
    .catch((err)=>{
        next(err);
    })
}
export function getSubCategories(req, res, next){
    SubCategory.find({}).then((categories)=>{
        res.status(200).send({status:200,message:categories})
    }).catch((err)=>{
        next(err);
    })
}
export function getSubCategory(req, res,next) {
    const {id}=req.params
    SubCategory.find({_id:id}).then((category)=>{
        res.status(200).send({status:200,message:category})
    }).catch((err)=>{
        next(err);
    })
}

export function editSubCategory(req, res ,next){
    const {id}=req.params
    SubCategory.findOneAndUpdate({_id:id},req.body)
    .then((response)=>{
        res.status(200).send({status:200,message:response})
    }).catch((err)=>{
        next(err)
    })
}

export function deleteSubCategory(req, res, next){
    const {id}=req.params
    SubCategory.findOneAndDelete({_id:id})
    .then((response)=>{
        res.status(200).send({status:200,message:"success"})
    })
}