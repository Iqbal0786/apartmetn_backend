const express= require("express");
const router=express.Router();
 const Apartment = require("../models/apartment.model")
router.get("" , async(req,res)=>{
    try {
        const apartments= await Apartment.find().lean().exec();
        res.status(200).send(apartments);
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})

router.post("",async(req,res)=>{
    try {
         const  apartment= await Apartment.create(req.body);
         return res.status(201).send(apartment)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})




module.exports=router