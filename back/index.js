require("dotenv").config()
const express=require("express")
const app=express()
const cookieParser=require("cookie-parser")
const connectdb=require("./conn/conn")
const port=process.env.PORT || 5000;
app.use("/",require("./routes/authRoutes"))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))


connectdb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
})
.catch(()=>{
    console.log("error")
})