const mongoose=require("mongoose")
let scheemma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

let Coll=new mongoose.model("data",scheemma)

module.exports=Coll