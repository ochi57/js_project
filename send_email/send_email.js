require('dotenv').config();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

var mailoptions = {
    from: 'johnopacho@gmail.com',
    to: 'olareodhiambo@yahoo.com',
    text: 'That was easy!'
};

transporter.sendMail(mailoptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:' + info.response);
    }
});