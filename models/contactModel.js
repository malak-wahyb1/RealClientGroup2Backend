import mongoose from "mongoose";
const { Schema , model } = mongoose;

const contactSchema = new Schema(
    {
        fullName:{
            type:"string",
            required:true,
        },
        email:{
            type:"string",
            required:true,
            match: /.+\@.+\..+/,
         
        },
        message:{
            type:"string",
            required:true,
        }
    },{
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
          },
    }
);
const Contact = model("Contact" , contactSchema)
export default Contact;