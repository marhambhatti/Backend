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


app.use("/api",router);
const PORT=process.env.PORT||5000;

app.listen( PORT, () => {
    console.log(`Server is listening on port ${ process.env.PORT}`);
});
