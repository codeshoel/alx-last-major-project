require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')

const schema = mongoose.Schema;

const CategorySchema = new schema({
    name: {
        type: String,
        maxlength: 255,
        minlength: 2,
        require: [true, 'Category name is required.'],
        unique: [true, 'Category name already exist.']
    },
    status: {
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Category', CategorySchema)
