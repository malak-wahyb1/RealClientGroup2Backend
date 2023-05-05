import {Schema , model} from "mongoose";


const reviewSchema = new Schema({
 customer:{
  type:Schema.Types.ObjectId,
  // required: [true, 'Why no bacon?'],
  ref:"Customer"
 },
 review:{
  type:Number,
  
 }
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
const review = model("review", reviewSchema);
export default review;
