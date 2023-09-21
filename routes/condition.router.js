const express = require('express')
const router = express.Router()
const ConditionService = require('../services/condition.service')
const service = new ConditionService()

router.get('/', async (req, res) => {
  try {
    const conditions = await service.find()
    res.json(conditions)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const body = req.body
    const newCondition = await service.create(body)
    res.json(newCondition)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
})

module.exports = router
