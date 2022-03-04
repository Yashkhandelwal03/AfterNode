//Adding directly the data at products to database

require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');
const jsonProducts = require('./products.json');


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Connection Successful");
    } catch (error) {
        console.log(error);     
    }
}

start();
