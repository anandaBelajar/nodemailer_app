require('dotenv').config(); //require dotenv package
const nodemailer = require('nodemailer'); //require nodemailer package

//step 1 make a transporter
let transporter = nodemailer.createTransport({
    //transporter connect ot mail hosting
    service: 'gmail', //if you're using gmail please make sure yu activated less secure app in google console
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

//step 2

let mailOptions = {
    //email data
    from: 'emailsender@email.com',
    to: 'emailreceiver1@email.com, emailreceiver2@email.com',
    subject: 'Testing and testing',
    text: 'IT works'
}

//step 3
transporter.sendMail(mailOptions, function(err, data) {
    //send the email
    if (err) {
        //send the error message if there are any error
        console.log(err);
    } else {
        //show email sent when there ae no error
        console.log('Email sent!');
    }
});