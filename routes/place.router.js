const express = require('express')
const router = express.Router()
const PlaceService = require('../services/place.service')
const service = new PlaceService()

router.get('/', async(req, res) =>{
  try {
    const places = await service.find()
    res.json(places)
  } catch (error) {

  }
})

router.post('/', async(req, res) => {
  try {
    const body = req.body
    const newPlace = await service.create(body)
    res.json(newPlace)
  } catch (error) {

  }
})

module.exports = router
