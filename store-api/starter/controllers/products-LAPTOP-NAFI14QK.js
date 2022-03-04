

const Products = require("../models/product");

//Passing the structured value
const getAllProductsStatic = async (req,res) =>{
    
    //Selecting the item from item list and limiting the item to 10 can use skip() also.
    const Product = await Products.find({price: {$gt: 30}}).select('name price').limit(10);


    
    //Remember for sorting of elements '+' denotes sorting in acending order '-' denotes sorting in decending order.
    // const Product = await Products.find({}).sort('-name price')

    // To find if the feature is true
    // const Product = await Products.find({
    //     featured:true
    // })


    //To get the products item with regrex <--Helps in finding string

    // const search = "a";
    // const Product = await Products.find({
    //     name : { $regrex: search, $options:'i'}
    // })
    res.status(200).json({Product,nHit : Product.length});
}

//Passing the default value from postman
const getAllProducts = async (req,res) =>{

    //Trying to calculate by allowing the value inside object
    const {featured,company,name,sort,fields,numericFilters} = req.query;
    const queryObject = {};

    if(featured){
        queryObject.featured = featured === 'true' ? true:false;
    }

    if(company){
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    if (numericFilters){
        const operatorMap ={
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        )
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
             const [field, operator, value] = item.split('-')
             if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) }
            }
        })
    }
    console.log(queryObject);

    let result =  Products.find(queryObject);

    if (sort) {
        console.log(sort)
    }

    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    //Just for sorting elements
    const Product = await result;
    res.status(200).json({Product,nHit : Product.length});



    //Two liner way to find the solution

    // const Product = await Products.find(req.query);
    // res.status(200).json('Connected to the server');
} 

module.exports = { getAllProductsStatic,getAllProducts }