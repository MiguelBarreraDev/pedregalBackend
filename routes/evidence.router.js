const express = require('express')
const router = express.Router()
const EvidenceSchema = require('../services/evidence.service')
const service = new EvidenceSchema()

router.get('/', async (req, res) => {
  try {
    const evidence = await service.find()
    res.json(evidence)
  } catch (error) {
    console.error(error)
  }
})


module.exports = router
