import Offer from "../models/offerModel.js";

export function createOffer(req, res, next) {
  const offer = new Offer(req.body);
  offer
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
      console.log(err);
    });
}
export function getOffer(req, res, next) {
  const { id } = req.params;
  Offer.find({ _id: id })
    .then((offer) => {
      res.status(200).send({ status: 200, message: offer });
    })
    .catch((err) => {
      next(err);
    });
}

export function getOffers(req, res, next) {
  Offer.find({})
    .then((offers) => {
      res.status(200).send({ status: 200, message: offers });
    })
    .catch((err) => {
      next(err);
    });
}

export function editOffer(req, res, next) {
  const { id } = req.params;
  Offer.findOneAndUpdate({ _id: id }, req.body)
    .then((offer) => {
      res.status(200).send({ status: 200, message: offer });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteOffer(req, res, next) {
    const {id}=req.params
    Offer.findOneAndDelete({_id:id})
    .then((offer) => {
        res.status(200).send({status:200,message:`Successfully deleted`})
    })
    .catch((error) => {next(error)})

}
