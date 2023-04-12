import mongoose from "mongoose";
const { Schema, model } = mongoose;

const paymentSchema = new Schema(
  {
    Name: {
      type: "string",
      require: true,
    },
    image: {
      type: "string",
      require: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
const Payment = model("Payment", paymentSchema);
export default Payment;
