const mongoose= require("mongoose");

const apartmentSchema= new mongoose.Schema({
      name:{type:String, required:true},
},{
    timestamps:true,
    versionKey:false
})

module.exports= mongoose.model("apartment",apartmentSchema);