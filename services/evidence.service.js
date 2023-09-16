const { models } = require('../libs/sequelize');

class EvidenceSchema {
  constructor() {}
  async create() {}
  async find() {
    const evidence = await models.Evidence.findAll();
    return evidence;
  }
  async findById(id) {
    const evidence = await models.Evidence.findByPk(id);
    return evidence;
  }
}

module.exports = EvidenceSchema;
