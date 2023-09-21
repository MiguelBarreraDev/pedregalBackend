const express = require('express');
const router = express.Router();
const EvidenceSchema = require('../services/evidence.service');
const evidenceService = new EvidenceSchema();
const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
// const { QueryTypes } = require('sequelize');
// const sequelize = require('../libs/sequelize');

router.get('/', async (req, res) => {
  try {
    const evidence = await evidenceService.find();
    res.json(evidence);
  } catch (error) {
    console.error(error);
  }
});

router.get('/download/:reportId', async (req, res) => {
  const { reportId } = req.params;
  try {
    const evidences = await evidenceService.findByReportId(reportId);

    if (!evidences || evidences.length === 0) {
      return res.status(404).send({
        errors: [
          `No se encontraron evidencias para el reporte con id ${reportId}`,
        ],
      });
    }

    const archive = archiver('zip', {
      zlib: { level: 9 },
    });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="evidences_report_${reportId}.zip"`
    );

    archive.pipe(res);

    evidences.forEach((evidence) => {
      archive.append(evidence.evidence, { name: evidence.fileName });
    });

    archive.finalize();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports = router;
