import Customer from "../models/customerModel.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
export function createCustomer(req, res, next) {
  const customer = new Customer(req.body);
  customer
    .save()
    .then((response) => {
      res.status(201).send({ status: 201, message: response });
    })
    .catch((err) => {
      next(err);
      console.log(err);
    });
}
export function getCustomer(req, res, next) {
  const { id } = req.params;
  Customer.find({ _id: id })
    .then((offer) => {
      res.status(200).send({ status: 200, message: offer });
    })
    .catch((err) => {
      next(err);
    });
}

export function getCustomers(req, res, next) {
  Customer.find({})
    .then((offers) => {
      res.status(200).send({ status: 200, message: offers });
    })
    .catch((err) => {
      next(err);
    });
}

export function editCustomer(req, res, next) {
  const { id } = req.params;
  Customer.findOneAndUpdate({ _id: id }, req.body)
    .then((offer) => {
      res.status(200).send({ status: 200, message: offer });
    })
    .catch((err) => {
      next(err);
    });
}

export function deleteCustomer(req, res, next) {
  const { id } = req.params;
  Customer.findOneAndDelete({ _id: id })
    .then((offer) => {
      res.status(200).send({ status: 200, message: `Successfully deleted` });
    })
    .catch((error) => {
      next(error);
    });
}

export function loginCustomer(req, res, next) {
  const userLoggingIn = req.body;
  Customer.findOne({ email: userLoggingIn.email }).then((customer) => {
    if (!customer) {
      res.send({ message: "invalid customer" });
    }
    bcrypt
      .compare(userLoggingIn.password, customer.password)
      .then((isCorrect) => {
        const token = jwt.sign(
          { id: customer._id, email: customer.email, role: customer.role },
          process.env.JWT_KEY,
          {
            expiresIn: 3000,
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 3000 * 1000, 
        });
        res.status(201).json({
          message: "Admin successfully Logged in",
          user: customer._id,
          token,
        });

      });
  });

}

export function  logout(req, res, next)  {
     res.clearCookie('token').status(200).send({ message: 'Logged out successfully' });
 
}  