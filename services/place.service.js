const { models } = require('../libs/sequelize')
const getConnection = require('../libs/postgres')

class PlaceService {
  constructor(){}
  async create(data){
    const newReport = await models.Status.create(data)
    return newReport
  }
  async find(){

    const reports = await models.Status.findAll()
    return reports
  }
}

module.exports = PlaceService
