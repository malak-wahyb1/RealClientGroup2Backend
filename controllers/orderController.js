import Order from "../models/orderModel.js";

export function createOrder(req, res, next) {
  const order = new Order(req.body);
  order
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
      console.log(err);
    });
}
export function getOrder(req, res, next) {
  const { id } = req.params;
  Order.find({ _id: id })
    .then((order) => {
      res.status(200).send({ status: 200, message: order });
    })
    .catch((err) => {
      next(err);
    });
}

export function getOrders(req, res, next) {
  Order.find({})
    .then((orders) => {
      res.status(200).send({ status: 200, message: orders });
    })
    .catch((err) => {
      next(err);
    });
}

export function editOrder(req, res, next) {
  const { id } = req.params;
  Order.findOneAndUpdate({ _id: id }, req.body)
    .then((order) => {
      res.status(200).send({ status: 200, message: order });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteOrder(req, res, next) {
    const {id}=req.params
    Order.findOneAndDelete({_id:id})
    .then((Order) => {
        res.status(200).send({status:200,message:`Successfully deleted`})
    })
    .catch((error) => {next(error)})

}
