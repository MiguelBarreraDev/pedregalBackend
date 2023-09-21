const express = require('express')
const router = express.Router()
const EvidenceSchema = require('../services/evidence.service')
const service = new EvidenceSchema()
const fs = require('fs')
const archiver = require('archiver')
const path = require('path')
// const { QueryTypes } = require('sequelize');
// const sequelize = require('../libs/sequelize');

router.get('/', async (req, res) => {
  try {
    const evidence = await service.find()
    res.json(evidence)
  } catch (error) {
    console.error(error)
  }
})

router.get('/download/:id', async(req, res) => {
  const id = req.params.id
  try {
    const data = await service.findById(id)
    if(!data || data.length === 0) {
      return res.status(400).send('No se encontró el archivo')
    }
    const filePath = path.join(__dirname, '../Envios')
    data.forEach((file, index)=>{
      const filename = file.fileName
      try {
        if(fs.existsSync(filePath)){
          fs.writeFileSync(filePath, file.evidence)
          console.log('se pudo')
        } else {
          console.log('no existe')
        }
        // fs.writeFileSync(filePath, file.evidence)
      } catch (error) {
        console.error(error)
      }
    })
    // const zip = archiver('zip')


    res.setHeader('Content-Disposition', 'attachment; filename=download.zip')
    // zip.pipe(res)
    // zip.finalize()

    // console.log('data', data)
    res.status(200).json({data})
  } catch (error) {
    console.error(error)
    res.status(500).json({error})
  }
})

module.exports = router
