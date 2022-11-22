const express = require('express');
const reportRouter = require('./report.router');
const tiposRouter = require('./tipos.router');
const evidenceRouter = require('./evidence.router');
const personRouter = require('./person.router');
const conditionRouter = require('./condition.router');
const placeRouter = require('./place.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/reports', reportRouter);
  router.use('/tipos', tiposRouter);
  router.use('/evidence', evidenceRouter);
  router.use('/person', personRouter);
  router.use('/conditions', conditionRouter);
  router.use('/places', placeRouter);

}

module.exports = routerApi;
