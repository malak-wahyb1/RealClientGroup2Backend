import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import adminRouter from "./routes/adminRoute.js"
import cookieParser from 'cookie-parser'
import bodyParser from "body-parser";
import PaymentRoute from "./routes/paymentRoute.js";
import CategoryRoute from "./routes/categoryRoute.js";
import newsLetterRoute from "./routes/newsLetterRoute.js";
import CustomerRoute from "./routes/customerRoute.js";
import ContactRoute from "./routes/contactRoute.js";
import SubCategoryRoute from "./routes/subCategoryRoute.js";
import OfferRoute from "./routes/offerRoute.js";
import OrderRoute from "./routes/orderRoute.js";
import ProductRoute from "./routes/productRoute.js";

dotenv.config();
await connectDB();
const port = process.env.PORT || 8000;
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("you are connected!");
})
app.use("/auth",adminRouter);
app.use("/payment", PaymentRoute);
app.use("/category", CategoryRoute);
app.use("/newsletter", newsLetterRoute);
app.use("/contact", ContactRoute);
app.use("/subCategory",SubCategoryRoute)
app.use("/offer",OfferRoute);
app.use("/order",OrderRoute);
app.use("/subCategory", SubCategoryRoute);
app.use("/customer", CustomerRoute);
app.use("/product", ProductRoute);

app.use("*", (req, res) => {
  res.status(404).send({ message: "404 Not Found" });
});
app.listen(port, console.log(`listening on ${port}`));

