const { models } = require('../libs/sequelize');

class ConditionService {
  constructor() {}

  async create(data) {
    const newCondition = await models.Condition.create(data);
    return newCondition;
  }

  async find() {
    const conditions = await models.Condition.findAll();
    return conditions;
  }
}

module.exports = ConditionService;
