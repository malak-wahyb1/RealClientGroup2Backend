import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import adminRouter from "./routes/adminRoute.js"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
dotenv.config();
await connectDB();
const port =process.env.PORT ||8000;
const app = express();
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }
app.use(express.json());

app.use(bodyParser.json());
app.use(cookieParser());
app.get("/", (req,res)=>{
    res.send("you are connected!");
})
app.use("/api/auth",adminRouter);
app.listen(port,console.log(`listening on ${port}`));

// process.on("unhandledRejection", err => {
//   console.log(`An error occurred: ${err.message}`)
//   server.close(() => process.exit(1))
// })
