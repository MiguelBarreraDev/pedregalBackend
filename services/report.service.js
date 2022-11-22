const { models } = require('../libs/sequelize')
const getConnection = require('../libs/postgres')

class ReportService {
  constructor(){}
  async create(data){
    const newReport = await models.Report.create(data)
    const { id: reportId } = newReport

    for (let i = 0; i < data.persons.length; i++) {
      const person = data.persons[i]
      person.reportId = reportId
      await models.Person.create(person)
    }

    return newReport
  }

  async find(){
    const reports = await models.Report.findAll(
      {
        include: ['tipos', 'persons']
      }
    )
    return reports
  }

  async findOne(id){
    const report = await models.Report.findByPk(id,
      {
        include: ['tipos', 'persons']
      }
    )
    return report
  }

  async upDate(id, body){

  }

  async delete(id) {
    console.log("=> llegue hasta aqui ")
    console.log(models.Report)
    await models.Report.destroy(id)
    return { id };
  }

}

module.exports = ReportService
