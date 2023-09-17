require('dotenv').config({path: '../.env'})
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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


// Delete data associated to user if user account is deleted.
// This way, when you call client.remove() 
// this middleware is automatically invoked to clean up dependencies.
// UserSchema.pre('remove', {query: true, document: false}, async function(next){
//     await mongoose.model('Wallet').remove({user_id: this._id}).exec();
//     next()
// });

// hash password before saving user
// UserSchema.pre('save', async function(next) {
//     const salt = await bcrypt.genSalt(10)
//     // console.log(this.password);
//     this.password = await bcrypt.hash(this.password, 10)
// });

// generate jwtToken
// UserSchema.methods.createJWT = function (){
//     return jwt.sign({userId: this._id, email: this.email}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
// }

// // Password comparism before logging user
// UserSchema.methods.comparePassword = async function(endUserPassword) {
//     const isMatch = await bcrypt.compare(endUserPassword, this.password)
//     return isMatch
// }



module.exports = mongoose.model('User', UserSchema)

