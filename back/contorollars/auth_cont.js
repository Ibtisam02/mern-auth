require("dotenv").config()
const {hashPassword,comparePass}=require("../helpers/auth")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Coll=require("../conn/model")

let create=async(req,res)=>{
    
    try {
        let {name,email,password}=req.body
        if (!name) {
            return res.json({
                error:"name is required"
            })
        }
        if (!password || password.length<6) {
            return res.json({
                error:"passeord is required and should be atlest 6 charactrs"
            })
        }
        
        let exist =await Coll.findOne({email:email})
        if (exist) {
           return res.json({
            error:"Email is taken"
           }) 
        }

        const hashedPassword=await hashPassword(password)
            let user=await Coll.create({name,email,password:hashedPassword})
            return res.json(user)
        } catch (error) {
            res.status(400).json(error)
        console.log("error while adding "+error)
        }
}

let userLogin=async(req,res)=>{
    try {
        let {email,password}=req.body
        if (!email) {
            res.json({
                error:"please enter a valid email"
            })
        }
        if (!password) {
            res.json({
                error:"please enter password"
            })
        }
         const user=await Coll.findOne({email})
        if (!user) {
            return res.json({
                error:"user dosn't exist"
            })
        }
        const match=await comparePass(password,user.password)
        
        if (match) {
             await jwt.sign({name:user.name,email:user.email,id:user._id},process.env.JWT_SCERET,{},(err,token)=>{

                if (err) {
                    console.log("this is jwt error "+err)
                }
                res.cookie("token",token).json(user)
            })
        }
         if(!match){
            return res.json({
                error:"invalid credentials"
            })
        }
    } catch (error) {
        console.log("this is error of login function "+error)
    }
}
let getProfile=async(req,res)=>{
    const token=req.cookie
    if (token) {
       await jwt.verify(token,process.env.JWT_SCERET,{},(err,user)=>{
            if (err) {
                throw err;
            }
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

module.exports={create,userLogin,getProfile}