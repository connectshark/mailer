const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SERVICE_AUTH_USER,
    pass: process.env.EMAIL_SERVICE_AUTH_PW
  }
})


const sendMail = ({ title, content, to }) => {
  const options = {
    from: process.env.EMAIL_DEFAULT_FROM,
    to: to,
    subject: title,
    text: content
  }
  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, info) => {
      if (err) {
        reject(err)
      } else {
        resolve(info)
      }
    })
  })
}

module.exports = sendMail