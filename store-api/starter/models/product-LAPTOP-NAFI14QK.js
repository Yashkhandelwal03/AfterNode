const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'product name should be provided']
    },
    price:{
        type: Number,
        required: [true,'product price should be provided']
    },
    featured:{
        type: Boolean,
        default:false
    },
    rating:{
        type: Number,
        default: 4.5
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type:String,
        // enum: {
        //     values:['Facebook','Google','Microsoft','Apple'],
        //     message: '{VALUE} is not supported'
        // }
    },
})

module.exports = mongoose.model('Products',productSchema);