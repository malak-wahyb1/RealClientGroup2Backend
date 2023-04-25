import newsLetter from "../models/newsLetterModel.js";
import fs from "fs";

export function AddNewsLetter(req, res, next) {
  const { email } = req.body;

  //check if email is valid
  if (!isValidEmail) {
    return res.status(400).send({ status: 400, message: "Invalid email" });
  }

  //check if email already exists
  newsLetter.findOne({ email: email }).then((existingEmail) => {
    if (existingEmail) {
      return res
        .status(400)
        .send({ status: 400, message: "Email already exists" });
    }

    //create new email
    const newEmail = new newsLetter({ email: email });

    newEmail
      .save()
      .then((savedEmail) => {
        res.status(200).send({ status: 200, message: savedEmail });
      })
      .catch((err) => {
        next(err);
      });
  });
}

export function getNewsLetters(req, res, next) {
  newsLetter
    .find({})
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}

export function getNewsLetter(req, res, next) {
  const { id } = req.params;
  newsLetter
    .findById({ _id: id })
    .then((data) => {
      res.status(200).send({ status: 200, message: data });
    })
    .catch((err) => {
      next(err);
    });
}
//Post and the routes
export function deleteNewsLetter(req, res, next) {
  const { id } = req.params;
  newsLetter
    .findOneAndDelete({ _id: id })
    .then((response) => {
      if (response) {
        res.status(200).send({ status: 200, message: response });
      } else {
        res.status(404).send({ status: 404, message: "Document not found" });
      }
    })
    .catch((err) => {
      next(err);
    });
}

function isValidEmail(email) {
  // Regular expression to check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
