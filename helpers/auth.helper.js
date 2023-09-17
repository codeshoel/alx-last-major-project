require('dotenv').config({path: '../.env'})
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uniqid = require('uniqid')

module.exports = {
    hashPassword: async (plainPassword) => {
        const response = await bcrypt.hash(plainPassword, 10)
        return response;
    },
    createJWT: async (payload) => {
        const response = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXP})
        return response;
    },
    emailToken: () => {
        const response = uniqid('Mejor-');
        return response;
    },
    comparePassword: async (plainPassword, hashedPassword) => {
        const response = bcrypt.compare(plainPassword, hashedPassword)
        return response;
    },
}







