import Payment from "../models/paymentModel.js";
import fs from "fs";
export function createPayment(req, res, next) {
  const payment = new Payment(req.body);
  payment.save().then((response) => {
    res
      .status(200)
      .send({ status: 201, message: response })
      .catch((err) => {
        next(err);
      });
  });
}

export function getPayments(req, res, next) {
  Payment.find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
export function getPayment(req, res, next) {
  const { id } = req.params;
  Payment.findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

export function deletePayment(req, res, next) {
  const { id } = req.params;
  Payment.findOneAndDelete({ _id: id })
    .then((response) => {
      fs.unlinkSync(response.image);
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}

export function editPayment(req, res, next) {
  const { id } = req.params;
  Payment.findOneAndUpdate({ _id: id }, req.body)
    .then((response) => {
      if (req.body.image) fs.unlinkSync(response.image);
      res.status(200).send({ status: 200, message: response });
    })
    .catch((err) => {
      next(err);
    });
}
