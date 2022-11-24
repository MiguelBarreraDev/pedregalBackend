const { models } = require('../libs/sequelize')

class EvidenceSchema {
  constructor(){}
  async create(){

  }
  async find(){
    const evidence = await models.Evidence.findAll()
    return evidence
  }
}

module.exports = EvidenceSchema
