
require('dotenv').config({path: '../.env'})
const Jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

module.exports = {
    authMiddleware: async (req, res, next) => {
        // check header
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            return res.status(StatusCodes.UNAUTHORIZED).json({data: 'Authorization Not Pass.', status: StatusCodes.UNAUTHORIZED})
        }
    
        const token = authHeader.split(' ')[1]
        try{
            const payload = Jwt.verify(token, process.env.JWT_SECRET)
            req.user = {user_id: payload.user_id, email: payload.email}
            next()
        }catch(err){
            return res.status(StatusCodes.UNAUTHORIZED).json({data: 'Authorization Not Pass.', status: StatusCodes.UNAUTHORIZED})
        }
    }
}


