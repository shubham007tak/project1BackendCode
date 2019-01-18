const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: '',
    pass: ''
  }
})

let mailOptions = {
  from: 'passwordreset@demo.com',
  to: '',
  html: ''
}

let emailSend = (email, content) => {
  mailOptions.to = email
  mailOptions.html = content
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email Sent' + info.response);
    }
  })
}

module.exports = {
  emailSend: emailSend
}
