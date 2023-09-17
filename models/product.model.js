require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')

const schema = mongoose.Schema;

const ProductSchema = new schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 2,
        require: [true, 'Product name is required.']
    },
    category: {
        type: Number,
        require: [true, 'Product category is required.']
    },
    price: {
        type: Number,
        require: [true, 'Product price is required.']
    },
    images: {
        type: String,
        require: [true, 'Product image is required.']
    },
    status: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product', ProductSchema)
