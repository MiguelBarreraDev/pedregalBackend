const { models } = require('../libs/sequelize')

class TiposService {

  constructor() { }
  async create(data) {
    const tipo = await models.Tipos.create(data)
    return tipo

  }
  async find() {
    const tipo = await models.Tipos.findAll()
    return tipo
  }

}

module.exports = TiposService
