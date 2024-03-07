const mongoose = require('mongoose');

productSchema = mongoose.Schema({
    id: {
        type: Number,
        trim:true,
    },
    title: {
        type: String,
        trim:true,
    },
    description: {
        type: String,
        trim:true,
    },
    isGovtVerified: {
        type: Boolean,
    },
    brand: {
        type: String,
        trim:true,
    },
    category: {
        type: String,
        trim:true,
    },
    thumbnail: {
        type: String,
        trim:true,
    },
    
})
const Product = mongoose.model('Product', productSchema)


module.exports = Product