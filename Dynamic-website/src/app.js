const express = require('express');
const path = require('path');
require('./db/conn');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//Creating static files
const createdpath = path.join(__dirname,"../public");


//Creating middlewares
app.use("/css",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use("/js",express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use("/jq",express.static(path.join(__dirname,"../node_modules/jquery/dist/")));

//Rendering hbs file
const viewPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
app.set("view engine","hbs");
app.set("views",viewPath);
app.use(express.static(createdpath));
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})