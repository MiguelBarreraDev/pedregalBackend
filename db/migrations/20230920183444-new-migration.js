'use strict';

const { REPORT_TABLE, ReportSchema } = require('../models/report.model')
const { TIPOS_TABLE, TiposSchema } = require('../models/tipos.model')
const { PERSON_TABLE, PersonSchema } = require('../models/person.model')
const { PLACE_TABLE, PlaceSchema } = require('../models/place.model')
const { CONDITION_TABLE, ConditionSchema } = require('../models/condition.model')
const { CONTACT_TABLE, ContactSchema } = require('../models/contact.model')
const { EVIDENCE_TABLE, EvidenceSchema } = require('../models/evidence.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TIPOS_TABLE, TiposSchema)
    await queryInterface.createTable(CONDITION_TABLE, ConditionSchema)
    await queryInterface.createTable(REPORT_TABLE, ReportSchema)
    await queryInterface.createTable(PERSON_TABLE, PersonSchema)
    await queryInterface.createTable(PLACE_TABLE, PlaceSchema)
    await queryInterface.createTable(CONTACT_TABLE, ContactSchema)
    await queryInterface.createTable(EVIDENCE_TABLE, EvidenceSchema)

  },

  async down (queryInterface) {
    await queryInterface.dropTable(TIPOS_TABLE, TiposSchema)
    await queryInterface.dropTable(CONDITION_TABLE, ConditionSchema)
    await queryInterface.dropTable(REPORT_TABLE, ReportSchema)
    await queryInterface.dropTable(PERSON_TABLE, PersonSchema)
    await queryInterface.dropTable(PLACE_TABLE, PlaceSchema)
    await queryInterface.dropTable(CONTACT_TABLE, ContactSchema)
    await queryInterface.dropTable(EVIDENCE_TABLE, EvidenceSchema)
  }
};
