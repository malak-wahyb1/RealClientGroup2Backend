import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderSchema = new Schema({
  totalprice: {
    type: "number",
    required: true,
  },
  customer:{
    type:Schema.Types.ObjectId,
    ref:"customer",
    required:true,
  },
  product:[{
    type:Schema.Types.ObjectId,
    ref:"product",
    required:true,
  }],
  payment:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:"Payment"
  },
  status:{
    type:"string",
    default:"in progress",
    enum:['in progress', 'in the road ', 'i dont know']
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
orderSchema.pre(['save'], async function(next){
  try {
    const productIds = this.product.map(p => p.toString());
    const products = await mongoose.model('product').find({
      _id: { $in: productIds }
    });
  
    for (const product of products) {
      product.quantity -= 1;
      await product.save();
    }
  
    next();
  } catch (err) {
    next(err)
   console.log(err);
  }
})

const Order=model('Order',orderSchema)
export default Order;