const express = require('express')
const router = express.Router()
const TiposService = require('../services/tipos.service')
const service = new TiposService()

router.get('/', async(req, res) =>{
  try {
    const typeReport = await service.find()
    res.json(typeReport)
  } catch (error) {

  }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body
    console.log('llegue aqui')
    const newTipo = await service.create(body)
    res.json(newTipo)
  } catch (error) {

  }
})

module.exports = router
