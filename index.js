import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import PaymentRoute from "./routes/paymentRoute.js";
dotenv.config();
await connectDB();
const port = process.env.PORT || 8000;
const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.get("/", (req, res) => {
  res.send("you are connected!");
});

app.use("/payment", PaymentRoute);
app.use("*", (req, res) => {
  res.status(404).send({ message: "404 Not Found" });
});
app.listen(port, console.log(`listening on ${port}`));
