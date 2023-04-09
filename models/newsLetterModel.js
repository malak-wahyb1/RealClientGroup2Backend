import mongoose from "mongoose";
const { Schema, model } = mongoose;

const newsLetterSchema = new Schema(
  {
    email: {
      type: "string",
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

const newsLetter = model("newsLetter", newsLetterSchema);
export default newsLetter;
