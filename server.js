require("dotenv").config();
const express = require("express");
const app = express();
const router=require("./routes/auth-routes");
const db=require("./Database/dbServer");
const logger=require("./Middleware/middle")
const cors = require("cors");


app.use(cors());

app.use(express.json());


app.use(logger)

// app.get("/my",(req,res)=>{
//      const data = [
//     { id: 1, name: "Arham", age: 20 },
//     { id: 2, name: "Ali", age: 22 },
//     { id: 3, name: "Sara", age: 19 }
//   ];
//     res.status(200).json(data);

// })

app.use("/api",router);
const PORT=process.env.PORT||5000;

app.listen( PORT, () => {
    console.log(`Server is listening on port ${ process.env.PORT}`);
});
