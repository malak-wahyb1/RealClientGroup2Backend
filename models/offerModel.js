import mongoose from "mongoose";
const { Schema, model } = mongoose;

const offerSchema = new Schema({
  Name: {
    type: "string",
    required: true,
    unique: true
  },
  dateStart:{
    type: "date",
    required:true,
  },
  dateEnd:{
    type: "date",
    required:true,
  },
  product:[{
    type:Schema.Types.ObjectId,
    ref:"product"
  }],
  percentage:{
    type: "number",
    required:true,
  }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
});
offerSchema.pre(['find','findOne'],function(){
  this.populate(['product'])
})
const Offer=model('Offer',offerSchema)
export default Offer;