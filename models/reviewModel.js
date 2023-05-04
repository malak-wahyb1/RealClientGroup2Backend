import {Schema , model} from "mongoose";


const reviewSchema = new Schema({
 customer:{
  type:Schema.Types.ObjectId,
  required: [true, 'Why no bacon?'],
  ref:"Customer"
 },
 review:{
  type:"number",
  enum:[1,2,3,4,5]
 }
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
const review = model("review", reviewSchema);
export default review;
