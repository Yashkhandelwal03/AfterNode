require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const productRouter = require("./routes/products");

//Helps in reading JSON data
app.use(express.json())

//Helps in connecting to the router
app.use('/api/v1/products',productRouter);

app.get('/',(req,res)=>{
    res.send('Hello world!!');
})
// app.use('api/v1/tasks',tasks);
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)
const port = process.env.PORT || 3000 ;

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,(req,res)=>{
            console.log(`listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
