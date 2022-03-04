const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

require('./src/db/conn');
const port = process.env.PORT || 3000;


// Use of static HTML file
// const direction = path.join(__dirname,"/public");
// app.use(express.static(direction))

//Adding template hbs file
const template_path = path.join(__dirname,'/templates/views');
const partial_path = path.join(__dirname,'/templates/partials');

app.set('view engine','hbs');
//Set path for views folder
app.set('views',template_path);
//Set path for regiters
hbs.registerPartials(partial_path);

app.get('/',(req,res)=>{

    //While using hbbs makesure to render index 
    res.render("index");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
