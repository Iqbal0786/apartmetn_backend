const mongoose= require("mongoose");

const  flatSchema= new mongoose.Schema({
      type:{type:String, required:true, default:"owner"},
       block:{type:String , required:true},
       flatNumber:{type:Number,required:true},
       apartment_id:{type:mongoose.Schema.Types.ObjectId , ref:"apartment" ,required:true},
       resident_id:[{type:mongoose.Schema.Types.ObjectId , ref:"resident" ,required:true}]
},{
    timestamps:true,
    versionKey:false
})

module.exports= mongoose.model("flat",flatSchema);