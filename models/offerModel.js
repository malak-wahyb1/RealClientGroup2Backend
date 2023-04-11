import mongoose from "mongoose";
const { Schema, model } = mongoose;

const offerSchema = new Schema({
  Name: {
    type: "string",
    required: true,
    unique: true
  },
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
});
const Offer=model('Offer',offerSchema)
export default Offer;