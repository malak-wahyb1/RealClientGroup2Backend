import mongoose from "mongoose";
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
    },
    email: {
      type: String,
      required: true,
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
// subCategorySchema.pre(["find", "findOne"], function () {
//   this.populate("category");
// });
const Customer = model("customer", customerSchema);
export default Customer;
