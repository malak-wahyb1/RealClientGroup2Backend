import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  totalprice: {
    type: "string",
    required: true,
  },
  customer:{
    type:Schema.Types.ObjectId,
    ref:"Customer",
    required:true,
  },
  product:[{
    type:Schema.Types.ObjectId,
    ref:"Product",
    required:true,
  }],
  payment:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:"Payment"
  },
  status:{
    type:"string",
    required:true,
  },
  note:{
    type:"string",
    required:true,
  },
  
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
});
orderSchema.pre(['find','findOne'],function(){
    this.populate(['customer','payment','product'])
})
const Order=model('Order',orderSchema)
export default Order;