const User = require('../models/user.model');
const {createJWT} = require('../helpers/auth.helper')
const mailboi = require('../mailboi/boi.user.mailer')
const { StatusCodes } = require('http-status-codes');
const mongoose = require('mongoose')
const uniqid = require('uniqid');
const authHelper = require('../helpers/auth.helper');



module.exports = {
    createUser: async (req, res) => {
        const isUserExist = await User.findOne({email: req.body.email});
        if(isUserExist){
            return res.status(StatusCodes.BAD_REQUEST).json({data: `User already exist.`});
        }
        const session = await mongoose.startSession();
        session.startTransaction();
        try{
            //send email to user
            const {name, email, password} = req.body;
            const passwordHash = await authHelper.hashPassword(password)
            const email_token = authHelper.emailToken()
            await mailboi.sendEmailVerificationToken(email, name, email_token)
            const _user = await User.create([{name: name, email: email, password: passwordHash, email_token: email_token}], session);
            const user = _user[0];
            await createJWT({user_id: user._id, email: user.email})
            session.endSession()
            return res.status(StatusCodes.CREATED).json({msg: `Dear ${user.name}, your account registration was successful.`, status: StatusCodes.CREATED});
        }catch(error){
            await session.abortTransaction();
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
        
    },
    login: async (req, res) => {
        const {email, password} = req.body;
        try{
            const user = await User.findOne({email: email})
            if(!user){
                return res.status(StatusCodes.UNAUTHORIZED).json({ data: 'Invalid credentials.' })
            }
            const isPasswordValid = await authHelper.comparePassword(password, user.password)
            if(!isPasswordValid){
                return res.status(StatusCodes.UNAUTHORIZED).json({ data: 'Invalid credentials.' })
            }
            const token = await authHelper.createJWT({user_id: user._id, email: user.email})
            return res.status(StatusCodes.OK).json({token: token, username: user.name, status: StatusCodes.OK});
        }catch(error){
            console.log(error)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({data: error})
        }
    },
}






