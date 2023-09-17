require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')

const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
        // required: [true, 'Please provide a name.'],
        maxlength: 30,
        minlength: 3,
    },
    email: {
        type: String,
        // required: [true, 'Please provide an email.'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             'Please provide a valid email.'
        ],
    },
    password: {
        type: String,
        // required: [true, 'Please provide a password.'],
        // maxlength: [20, 'Password character must not be greater than 20.'],
        // minlength: [6, 'Password character must not be less than 6.'],
    },
    status: {
        type: Number,
        default: 0,
    },
    email_token: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema)

