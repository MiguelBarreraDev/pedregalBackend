const express = require('express');
const router = express.Router();
const ReportService = require('../services/report.service');
const service = new ReportService();
const fs = require('fs');
const path = require('path');
const upload = require('../middlewares/multerRead');
const sendMaiilMachine = require('../utils/nodemailer');

router.get('/', async (req, res) => {
  try {
    const reports = await service.find();
    res.json(reports);
  } catch (error) {
    console.error(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const report = await service.findOne(id);
    res.json(report);
  } catch (error) {
    res.status(401).send(error);
  }
});

router.post('/', upload, async (req, res, nex) => {
  const arrayFiles = () => {
    const filesDir = path.join(__dirname, '../uploads');
    const fileObj = fs.readdirSync(filesDir);
    let arrayFile = [];
    for (let i = 0; i < fileObj.length; i++) {
      arrayFile.push({
        filename: fileObj[i],
        path: `${__dirname}/../uploads/${fileObj[i]}`,
      });
    }
    return arrayFile;
  };

  try {
    const body = req.body;
    const report = await service.create(body);
    const { email } = JSON.parse(body.contact);
    // try {
    //   sendMaiilMachine(email, arrayFiles(), body);
    // } catch (error) {
    //   console.log('problemas con envio', error);
    // }
    // console.log(report.id);
    res.status(201).send(report.id);
  } catch (error) {
    res.status(401).json('cannot upload file');
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const upDateReport = await service.upDate(id, body);
    res.json(upDateReport);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const del = await service.delete(id);
    res.json(del);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
