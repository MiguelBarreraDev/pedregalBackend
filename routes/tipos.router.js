const express = require('express')
const router = express.Router()
const TiposService = require('../services/tipos.service')
const service = new TiposService()

router.get('/', async(req, res) =>{
  try {
    const typeReport = await service.find()
    res.json(typeReport)
  } catch (error) {
    console.error(error)
  }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body
    const newTipo = await service.create(body)
    res.json(newTipo)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
