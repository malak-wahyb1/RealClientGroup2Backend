import mongoose from "mongoose";
const connectDB=async()=>{
    try{
        mongoose.set('strictQuery',false);
        const conn =await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
        })
        console.log(`Mongoose Connect:${conn.connection.host}`);
    }catch(e){
        console.log(`Error:${e.message}`);
        process.exit(1);
    }
}
export default connectDB