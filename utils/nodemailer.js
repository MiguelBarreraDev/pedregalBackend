const nodemailer = require('nodemailer')
const config = require('../config/config')

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.email,
        pass: config.emailKey
    },
  }
)

const mailOptions = (mail, datos) => {
  return {
    from: "Pedregal",
    to: `${mail}, lineaetica@elpedregalsa.com`,
    subject: "Enviado desde nodemailer",
    html: datos
  }

}

const sendMail = (mailOptions) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.error(error)
    } else {
      console.log("esto es un detalle succes email", info)
    }
  })
}

module.exports = {sendMail, mailOptions}
