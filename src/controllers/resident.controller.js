const express= require("express");
const router=express.Router();
 const Resident = require("../models/resident.model")
router.get("" , async(req,res)=>{
    try {
        const residents= await Resident.find().lean().exec();
        res.status(200).send(residents);
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})

router.post("",async(req,res)=>{
    try {
         const  resident= await Resident.create(req.body);
         return res.status(201).send(resident)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})




module.exports=router