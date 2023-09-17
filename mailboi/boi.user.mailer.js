require('dotenv').config({path: '../.env'})
const nodemailer = require('nodemailer')

module.exports = {
    sendEmailVerificationToken: async (recipientEmail, recipientName, emailToken) => {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.SECURE,
            ignoreTLS: true, //TLS
            auth: {
                user: process.env.ADMIN_EMAIL_USER,
                pass: process.env.ADMIN_EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: `"Alx Last-Mejor-Project(E-commerce App)" ${process.env.ADMIN_EMAIL_USER}`, // sender address
            to: recipientEmail, // list of receivers separate with commas.
            subject: "Email Varification",
            html: `
                    <h4>Welcome to E-commerce App, ${recipientName}</h4>
                    <br/>
                    <p>
                    In order to create a good user experience during product delivery you'll have 
                    to activate your account by clicking the link below to help us serve you well.
                    </p>
                    <br/>
                    <a href=${process.env.BASED_URI}/account/email-verification/?token=${emailToken}>Click to activate account</a>
                `
        },(err) => {
            if(err){
                console.log(err)
            }
            return StatusCodes.OK
        });
    },
}



