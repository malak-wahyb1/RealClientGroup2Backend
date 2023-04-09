import Contact from "../models/contactModel.js";
import fs from "fs";

export function createContact(req ,res,next){
    const contact = new Contact (req.body);
    contact.save().then((response)=>{
    res
     .status(200)
     .send({status:201 , message :response})
     .catch((err) =>{
        next(err);
     });
    });
}
export function getContacts(req , res ,next){
    Contact.find({})
     .then((data) =>{
        res.status(200).send({status :200 , message});
     })
     .catch((err)=>{
        next(err);
        
     });
}
export function getContact(req,res,next){
    const {id}=req.params;
    Contact.findById({_id:id})
     .then ((data) => {
        res.status(200).send({status:200,message:data});
     })
     .catch((err) => {
        next(err);
     });
}
export function deleteContact(req,res,next){
    const{id}=req.params;
    Contact.findOneAndDelete({_id:id})
     .then((response)=>{
        res.status(200).send({status:200,message:response});
    
     })
     .catch((err)=>{
        next(err);
     })
}
export function editContact (req,res,next){
    const{id}=req.params;
    Contact.findOneAndUpdate({_id:id},req.body)
     .then((response)=>{
        res.status(200).send({status:200 ,message:response});       
     })
     .catch((err)=>{
        next(err);

     });
}
