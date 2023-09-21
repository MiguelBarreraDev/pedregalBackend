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

  /**
   * Find evidence by report id
   */
  async findByReportId(reportId) {
    const evidences = await models.Evidence.findAll({
      where: { reportId },
    });
    return evidences;
  }
}

module.exports = EvidenceSchema;
