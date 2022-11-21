const { models } = require('../libs/sequelize')

class EvidenceSchema {
  constructor(){}
  async create(){

  }
  async find(){
    console.log(`=> ${Object.values(models)}`)
    const evidence = await models.Evidence.findAll()
    return evidence
  }
}

module.exports = EvidenceSchema
