import mongoose from "mongoose";
const { Schema , model } = mongoose;

const contactSchema = new Schema(
    {
        Email:{
            type:"string",
            require:true,
        },
        Password:{
            type:"string",
            require:true,
        },
        timetamps:{
            createdAt:"created_at",
            updatedAt:"updated_at",
        },
    }
);
const Contact = model ("Contact" , contactSchema)