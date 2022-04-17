const express= require("express");
const { path } = require("express/lib/application");
const router=express.Router();
 const Flat = require("../models/flat.model")
router.get("" , async(req,res)=>{
    try {
        let  flats;
          flats= await Flat.find().populate({path:"resident_id",select:["name","gender","age"]}).lean().exec();
        res.status(200).send(flats);
    } catch (error) {
        return res.status(400).send({message:error.message})
    }
})

router.post("",async(req,res)=>{
    try {
         const  flat= await Flat.create(req.body);
         return res.status(201).send(flat)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})




module.exports=router