const { models } = require('../libs/sequelize')


class ReportService {
  constructor() {
    let lastId
  }
  async create(data) {
    const uniqId = () => {
      const id = `${Math.floor(1000 + Math.random() * 9000)}`
      return id.toUpperCase()
    }
    const id = uniqId()
    this.lastId = id
    const completeData = {
      ...data,
      id
    }
    console.log(completeData)
    const newReport = await models.Report.create(completeData)

    if (completeData.persons.length) {
      for (let i = 0; i < completeData.persons.length; i++) {
        const person = completeData.persons[i]
        person.reportId = completeData.id
        await models.Person.create(person)
      }
    }
    if (completeData.places.length) {
      for (let i = 0; i < completeData.places.length; i++) {
        const place = completeData.places[i]
        place.reportId = completeData.id
        await models.Place.create(place)
      }
    }

    const contact = completeData.contact
    contact.reportId = completeData.id
    await models.Contact.create(contact)
    return completeData.id
  }

  async createEvidence(data) {
    const completeData = {
      ...data,
      reportId: this.lastId
    }

    try {
      const evidence = await models.Evidence.create(completeData)
      return evidence
    } catch (error) {
      console.error(error)
    }

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
        include: ['tipos', 'persons', 'places', 'condition', 'contact', 'evidences']
      }
    )
    return report
  }

  async upDate(id, changes) {
    const report = await models.Report.findByPk(id)
    const upDate = await report.update(changes)
    return upDate
  }

  async delete(id) {
    const report = await models.Report.findByPk(id)
    await report.destroy()
    return id
  }

}

module.exports = ReportService
