const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productname:{
        type:String,
        require:true,
    },
    productprice:{
        type:Number,
        require:true,
    },
    productquantity:{
        type:Number,
        require:true,
    }
});

const Product = mongoose.model('Product',productsSchema);
module.exports = Product;


