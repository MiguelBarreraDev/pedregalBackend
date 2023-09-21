const { models } = require('../libs/sequelize');

class EvidenceSchema {
  constructor() {}
  async create() {}
  async find() {
    const evidence = await models.Evidence.findAll();
    return evidence;
  }
  async findById(id) {
    const evidence = await models.Evidence.findAll({
      where: { report_id: id },
    });
    return evidence;
  }
}

module.exports = EvidenceSchema;
