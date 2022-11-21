const express = require('express')
const router = express.Router()
const ReportService = require('../services/report.service')
const service = new ReportService()

router.get('/', async(req, res) =>{
  try {
    const reports = await service.find()
    res.json(reports)
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async(req, res) => {
  try {
    const body = req.body
    const newReport = await service.create(body)
    res.json(newReport)
  } catch (error) {

  }
})
router.patch('/:id', async(req, res)=>{

})

module.exports = router
