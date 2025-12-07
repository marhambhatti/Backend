const express=require("express");
const router=express.Router();
const {addPerson,myJOKES}=require("../controller/workoutcontroller")

// getting data 
// router.get("/get",(req,res)=>{
//     res.status(200).json({msg:"Get API"});
// })


router.get("/jokes",myJOKES)


// post Data To Create Document
router.post("/addUser",addPerson)

module.exports=router; 