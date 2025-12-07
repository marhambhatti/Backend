require("dotenv").config();
const mongoose=require("mongoose");
mongoose.connect(process.env.MongoURL)

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("Database Connected SuccesFully");
})
db.on("disconected",()=>{
    console.log("Database Disconnected")
})
db.on("error",()=>{
    console.log("Database Connection Error")
})

module.exports=db;