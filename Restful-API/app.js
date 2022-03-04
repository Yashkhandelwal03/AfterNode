const express = require ('express');
const app = express();
const port = 3000;
require("./src/db/conn");
const mansRanking = require("./src/models/mens");
const router = require('./src/routes/router');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.use(router);

app.listen(port,()=>{
    console.log("Listening at port 5000");
})