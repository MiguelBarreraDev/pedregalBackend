const express = require('express')
const router = express.Router()
const ReportService = require('../services/report.service')
const service = new ReportService()
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')
const multer = require('multer')
const config = require('../config/config')

const storage = multer.diskStorage({
  destination: path.join(__dirname,'../uploads'),
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const uploads = multer({
  storage
}).single('img')

const removeDir = function(path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)
    if (files.length > 0) {
      files.forEach(function(filename) {
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename)
        } else {
          fs.unlinkSync(path + "/" + filename)
        }
      })
    }
  } else {
    console.error("Directory path not found.")
  }
}

router.get('/', async(req, res) =>{
  try {
    const reports = await service.find()
    res.json(reports)
  } catch (error) {
    console.error(error)
  }
})

router.get('/:id', async(req, res) =>{
  try {
    const {id} = req.params
    const report = await service.findOne(id)
    res.json(report)
  } catch (error) {

  }
})

router.post('/', async(req, res) => {

  const body = req.body
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
  try {
    const newReport = await service.create(body)
    const emails = [body.contact.email, 'lineaetica@elpedregalsa.com']
    const mailOptions = {
      from: "Pedregal",
      to: `${body.contact.email}, lineaetica@elpedregalsa.com`,
      subject: "Enviado desde nodemailer",
      html: `
      <h1>Reporte generado con código:</h1>
      <h2>${newReport}</h2>
      `
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if(error) {
        console.error(error)
      } else {
        console.log("esto es un detalle succes email")
      }
    })
    console.log('pase por el mail')
    res.status(201).json(newReport)

  } catch (error) {
    console.error(error)
  }
})

router.post('/file', uploads, async(req, res, nex)=>{
  const data = {
    evidence: fs.readFileSync(path.join(__dirname, '../uploads/' + req.file.filename))
  }
  try {
    const newEvidence = await service.createEvidence(data)
    const pathToDir = path.join(__dirname, "../uploads")
    removeDir(pathToDir)
    res.status(201).json('file upload')
  } catch (error) {
    console.error(error)
    res.json("cannot upload file")
  }
})

router.patch('/:id', async(req, res)=>{
  const {id} = req.params
  const body = req.body
  try {
    const upDateReport = await service.upDate(id, body)
    res.json(upDateReport)
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const del = await service.delete(id)
    res.json(del)
  } catch (error) {

  }
}
);

module.exports = router
