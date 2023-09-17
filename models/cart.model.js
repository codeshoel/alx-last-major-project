require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')

const schema = mongoose.Schema;

const CartSchema = new schema({
    user_id: {
        type: String,
        require: [true, 'User id can\'nt be empty.']
    },
    name: {
        type: String,
        maxlength: 255,
        minlength: 2,
        require: [true, 'Product name is required.']
    },
    price: {
        type: Number,
        require: [true, 'Product price is required.']
    },
    images: {
        type: String,
        require: [true, 'Product image is required.']
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Cart', CartSchema)
