require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')

const schema = mongoose.Schema;

const ProductImageSchema = new schema({
    product_id: {
        type: String,
        require: [true, 'product id must be included'],
    },
    name: {
        type: Map,
        of: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('ProductImage', ProductImageSchema)
