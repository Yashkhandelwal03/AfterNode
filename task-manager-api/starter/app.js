const express = require('express');
const app = express()
const tasks = require('./routers/route')
const path = require('path');
const dbDetails = require('./db/connect');
const notFound = require('./middleware/not-found');
const expressHandlerMiddleware = require('./middleware/error-handler');
const port = process.env.PORT || 3000;

//Trying to wrap the credentials in dotenv file
require('dotenv').config();

//Express Middleware
app.use(express.json())

// console.log(path.join(__dirname,'/public'));
app.use('/api/v1/tasks',tasks)
// const pathOn = path.join(__dirname,'/public');
app.use(express.static('./public'));
app.use(notFound);
app.use(expressHandlerMiddleware);
//Trying to create to database(dbDetails) first then to connect to backend server.
const databaseCall = async () =>{
    try {
        await dbDetails(process.env.MONGO_URI);
        // await dbDetails();
        app.listen(port,
            console.log(`Listening on port ${port}`)
        )
    } catch (error) {
        console.log(error)
    }
} 

databaseCall()