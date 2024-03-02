
const mongoose=require("mongoose")

let connectdb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected successfully")
    } catch (error) {
        console.log("Error while connectin "+error)
        process.exit(0);
    }
}

module.exports=connectdb

