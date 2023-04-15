import {Schema , model} from "mongoose";


const reviewSchema = new Schema({
  feedback: {
    type: Number,
    required: true
  }
},{
  collection:"review"
});
const review = model("review", reviewSchema);
export default review;
