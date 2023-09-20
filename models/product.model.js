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
    category_id: {
        type: String,
        require: [true, 'Product category is required.']
    },
    price: {
        type: Number,
        require: [true, 'Product price is required.']
    },
    images: {
        type: Map,
        of: String,
        require: [true, 'Images are required.']
    },
    status: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Product', ProductSchema)
