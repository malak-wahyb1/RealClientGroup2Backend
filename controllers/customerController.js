import Customer from "../models/customerModel.js";
import bcrypt from 'bcrypt';
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
 const userLoggingIn=req.body;
  Customer.findOne({email: userLoggingIn.email})
  .then((customer) => {
    if(!customer){
      res.send({message:"invalid customer"})

    }
    bcrypt.compare(userLoggingIn.password,customer.password)
    .then((isCorrect)=>{
      if(isCorrect){
        const payload={
          id:customer.id,
          email:customer.email
        }
        jwt.sign(
          payload,
          process.env.JWT_KEY,
          {expiresIn:86400},
          (err,token)=>{
            if(err) res.send({message:err})
            res.send({message:"success",token:token})
          }
        )
      }else{
        res.status(403).send({message:"invalid_token"})
      }
    })
  })

  
}
