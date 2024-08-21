const nodemailer = require('nodemailer');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service:"Gmail",
    host: "smtp.email.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
});

const sendEmail =async ()=>{
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER, // sender address
            to: "somammahi@gmail.com", // list of receivers
            subject:"Welcome to task Management",
            text: `Hi Sonu`, 
          });
        
    } catch (error) {
        console.log(error.message);
    }
}

// delay for 10 minutes

const delayInMinutes = 10;
setTimeout(sendEmail, delayInMinutes * 60 * 1000);

module.exports = sendEmail


// M6Q6DVUNNF825D8YSL8FNQJU