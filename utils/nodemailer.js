const nodemailer = require('nodemailer')
const config = require('../config/config')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
const removeDir = require('../utils/cleanDir')


const sendMaiilMachine = (email, arrayFiles, data) => {
  const persons = () =>{
    let list = []
    if (typeof data.persons === 'object'){
      for (let i = 0; i < data.persons.length; i++) {
        let per = JSON.parse(data.persons[i])
        let newStruc = {
          Nombre: '',
          Apellido: '',
          Cargo: '',
          Empresa: ''
        }
        newStruc.Nombre = per.name
        newStruc.Apellido = per.lastName
        newStruc.Cargo = per.cargo
        newStruc.Empresa = per.company
        list.push(newStruc)

      }
    } else {
      let p = list.push(JSON.parse(data.persons))
      let newStruc = {}
        newStruc.Nombre = p.name
        newStruc.Apellido = p.lastName
        newStruc.Cargo = p.cargo
        newStruc.Empresa = p.company
        list.push(newStruc)
    }
    return list
  }
  const places = () =>{
    let list = []
    if (typeof data.places === 'object'){
      for (let i = 0; i < data.places.length; i++) {
        const pl = JSON.parse(data.places[i])
        let newStruc = {}
        newStruc.Lugar = pl.name
        list.push(newStruc)
      }
    } else {
      const pl = JSON.parse(data.places)
      let newStruc = {}
      newStruc.Lugar = pl.name
      list.push(newStruc)
    }
    return list
  }
  const contact = JSON.parse(data.contact)

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


  transporter.use('compile', hbs({
    viewEngine: {
      extname: '.handlebars',
      layoutsDir: path.join(__dirname, '../template'),
      defaultLayout: 'index',
    },
    viewPath: 'template',
    extName: '.handlebars'
  }))

  const mailOptions =
     {
      from: "Pedregal",
      to: `${email}, lineaetica@elpedregalsa.com`,
      subject: "Enviado desde nodemailer",
      template: 'index',
      attachments: arrayFiles,
      context: {
        persons: persons(),
        places: places (),
        contact,
        id: data.id,
        tiposId: data.tiposId,
        fechaInicio: data.fechaInicio,
        fechaFin: data.fechaFin,
        description: data.description,
        referenceEv: data.referenceEv,
        res1: data.res1,
        res2: data.res2,
        res3: data.res3,
        res4: data.res4,
        res5: data.res5,
        res6: data.res6,
        res7: data.res7
      }
    }



  const filesDir = path.join(__dirname, '../uploads')

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.error(error)
    } else {
      console.log("esto es un detalle succes email", info)
      removeDir(filesDir)
    }
  })



}

module.exports = sendMaiilMachine
