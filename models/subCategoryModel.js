import mongoose from 'mongoose'
const {Schema, model}=mongoose;

const subCategorySchema= new Schema({
    name:{
        type:'string',
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:'Category',
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
})
subCategorySchema.pre(['find','findOne'],function(){
    this.populate('category')
  })
const SubCategory=model('SubCategory',subCategorySchema)
export default SubCategory