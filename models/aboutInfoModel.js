import {Schema , model} from "mongoose";


const aboutInfoSchema = new Schema({
  facebook: {
    type: String,
    required: true
  },
  instagram: {
    type: String,
    required: true
  }, 
   whatsapp: {
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
