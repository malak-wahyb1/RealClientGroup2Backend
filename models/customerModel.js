import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const { Schema, model } = mongoose;

const customerSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
     
    },
    phoneNum: {
      type: String,
      required: true,
      unique:"the phone number is already used"
    },
    email: {
      type: String,
      required: true,
      unique:"the email is already used"
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
customerSchema.pre("save", function (next) {
 
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(this.password, salt) )
    .then((hashPassword) => {
      this.password = hashPassword;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
  
});
const Customer = model("customer", customerSchema);
export default Customer;
