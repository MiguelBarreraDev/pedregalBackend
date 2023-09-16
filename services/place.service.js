const { models } = require('../libs/sequelize');

class PlaceService {
  constructor() {}
  async create(data) {
    const newReport = await models.Place.create(data);
    return newReport;
  }
  async find() {
    const reports = await models.Place.findAll();
    return reports;
  }
}

module.exports = PlaceService;
