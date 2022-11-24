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

  try {
    const newReport = await service.create(body)
    res.json(newReport)
  } catch (error) {
    console.error(error)
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
