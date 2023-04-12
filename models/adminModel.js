import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
   
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    role: {
      type: String,
      enum:["admin","superAdmin"],
      default: "admin",
      require: true,
    },
  },
  { collection: "Admin", timestamps: true }
);
const Admin = model("Admin", adminSchema);
export default Admin;