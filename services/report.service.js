const { models } = require('../libs/sequelize')
const getConnection = require('../libs/postgres')

class ReportService {
  constructor(){}
  async create(data){
    const newReport = await models.Report.create(data)
    return newReport
  }
  async find(){
    // const query = "SELECT * FROM reports"
    // console.log("que paso ?")
    // const consult = await getConnection.query(query)
    // return consult
    const reports = await models.Report.findAll(
      {
        include: ['tipos']
      }
      )
    return reports
  }
}

module.exports = ReportService
