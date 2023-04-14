import {Schema , model} from "mongoose";


const aboutInfoSchema = new Schema({
  links: {
    type: String,
    required: true
  },
  maps: {
    type: String,
    required: true
  }
});
const aboutInfo = model("aboutInfo", aboutInfoSchema);
export default aboutInfo;
