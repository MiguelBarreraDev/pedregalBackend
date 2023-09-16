const express = require('express')
const router = express.Router()
const TiposService = require('../services/tipos.service')
const service = new TiposService()

router.get('/', async(req, res) =>{
  try {
    const typeReport = await service.find()
    // if (typeReport) {
    //   res.json({ msg: "not found"})
    // }
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
    res.status(400).json("not found")
  }
})

router.delete('/:id', async(req, res) =>{
  try {
    const {id} = req.params
    const dlt = await service.delete(id)
    res.status(201).json(dlt)
  } catch (error){
    console.log(error)
    res.status(400).json("not found")
  }
})

module.exports = router
