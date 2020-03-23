const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'andrewjoyt@gmail.com',
        pass: 'rgadlpfipvlinwvb'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter;
