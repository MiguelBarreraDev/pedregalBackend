const { models } = require('../libs/sequelize')

class ReportService {
  constructor() { }
  async create(data) {

    const newReport = await models.Report.create(data)
    const { id: reportId } = newReport

    if (data.persons.length) {
      for (let i = 0; i < data.persons.length; i++) {
        const person = data.persons[i]
        person.reportId = reportId
        await models.Person.create(person)
      }
    }
    if (data.places.length) {
      for (let i = 0; i < data.places.length; i++) {
        const place = data.places[i]
        place.reportId = reportId
        await models.Place.create(place)
      }
    }

    const contact = data.contact
    contact.reportId = reportId
    await models.Contact.create(contact)
    return newReport
  }

  async find() {
    const reports = await models.Report.findAll(
      {
        include: ['tipos', 'persons', 'places', 'condition', 'contact']
      }
    )
    return reports
  }

  async findOne(id) {
    const report = await models.Report.findByPk(id,
      {
        include: ['tipos', 'persons', 'places', 'condition', 'contact']
      }
    )
    return report
  }

  async upDate(id, changes) {
    const report = await this.findOne(id)
    const upDate = await report.update(changes)
    return upDate
  }

  async delete(id) {
    const report = await this.findOne(id)
    await report.destroy()
    return id
  }

}

module.exports = ReportService
