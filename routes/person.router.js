const express = require('express');
const router = express.Router();
const PersonService = require('../services/person.service');
const service = new PersonService()

router.get('/', async(req, res)=>{
  try {
    const persons = await service.find()
    res.json(persons)
  } catch (error) {

  }
})

router.post('/', async(req, res)=>{
  try {
    const body = req.body
    const newPerson = await service.create(body)
    res.json(newPerson)
  } catch (error) {

  }
})

module.exports = router
