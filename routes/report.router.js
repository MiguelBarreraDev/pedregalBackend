const express = require('express')
const router = express.Router()
const ReportService = require('../services/report.service')
const service = new ReportService()
const fs = require('fs')
const path = require('path')
const removeDir = require('../utils/cleanDir')
const upload = require('../middlewares/multerRead')
const {sendMail, mailOptions} = require('../utils/nodemailer')
const template = require('../utils/email')

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
    res.status(401).send(error)
  }
})

router.post('/', upload, async(req, res, nex)=>{
  const filesDir = path.join(__dirname, '../uploads')
  // const pathfile = path.join(__dirname, '../utils/email.html')
  // let datos
  // fs.readFile(pathfile, 'utf-8',(err, data) => {
  //   if (err){
  //     console.error(err)
  //   } else {
  //     datos = data
  //   }
  // })
  try {
    const body = req.body
    const datos = template(body)
    console.log(datos)
    // const report = await service.create(body)
    // const {email} = JSON.parse(body.contact)
    // sendMail(mailOptions(email, datos))
    // removeDir(filesDir)
    // res.status(201).json(report)
  } catch (error) {
    res.status(401).json("cannot upload file")
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
