/* eslint-disable no-unreachable */
const { models } = require('../libs/sequelize')
const path = require('path')
const fs = require('fs')

class ReportService {
  constructor() {}

  async create(data) {
    const uniqId = () => {
      const id = `${Math.floor(1000 + Math.random() * 9000)}`
      return id
    }
    const id = uniqId()
    const completeData = {
      ...data,
      id
    }

    const newReport = await models.Report.create(completeData)


    if (typeof completeData.persons === 'object') {
      for (let i = 0; i < completeData.persons.length; i++) {
        const person = JSON.parse(completeData.persons[i])
        person.reportId = completeData.id
        await models.Person.create(person)
      }
    } else {
      const person = JSON.parse(completeData.persons)
      person.reportId = completeData.id
      await models.Person.create(person)
    }

    if (typeof completeData.places === 'object') {
      for (let i = 0; i < completeData.places.length; i++) {
        const place = JSON.parse(completeData.places[i])
        place.reportId = completeData.id
        await models.Place.create(place)
      }
    } else {
      const place = JSON.parse(completeData.places)
      place.reportId = completeData.id
      await models.Place.create(place)
    }

    const filesDir = path.join(__dirname, '../uploads')
    const files = fs.readdirSync(filesDir)
    files.forEach(async file => {
      const dataFile = {
        evidence: fs.readFileSync(__dirname, '../uploads/' + file),
        reportId: id
      }
      try {
        await models.Evidence.create(completeData)
      } catch (error) {
        console.error(error)
      }
    });

    return completeData.id

  //   const contact = completeData.contact
  //   contact.reportId = completeData.id
  //   await models.Contact.create(contact)
  //   return completeData.id
  }

  // async createEvidence(data) {
  //   const completeData = {
  //     ...data,
  //     reportId: this.lastId
  //   }

  //   try {
  //     const evidence = await models.Evidence.create(completeData)
  //     return evidence
  //   } catch (error) {
  //     console.error(error)
  //   }

  // }

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
