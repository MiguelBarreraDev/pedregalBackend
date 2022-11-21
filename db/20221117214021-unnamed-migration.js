'use strict';

const {STATUS_TABLE, StatusSchema} = require('../models/status.model')
const {TYPEREPORTTABLE_TABLE, TypeReportSchema} = require('../models/type.model')
const {PERSON_TABLE, PersonSchema} = require('../models/person.model')
const {PLACE_TABLE, PlaceSchema} = require('../models/place.model')
const {EVIDENCE_TABLE, EvidenceSchema} = require('../models/evidence.model')
const {REPORT_TABLE, ReportSchema} = require('../models/report.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(STATUS_TABLE, StatusSchema)
    await queryInterface.createTable(TYPEREPORTTABLE_TABLE, TypeReportSchema)

    await queryInterface.createTable(REPORT_TABLE, ReportSchema)

    await queryInterface.createTable(PERSON_TABLE, PersonSchema)
    await queryInterface.createTable(PLACE_TABLE, PlaceSchema)
    await queryInterface.createTable(EVIDENCE_TABLE, EvidenceSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(STATUS_TABLE, StatusSchema)
    await queryInterface.dropTable(TYPEREPORTTABLE_TABLE, TypeReportSchema)
    await queryInterface.dropTable(PERSON_TABLE, PersonSchema)
    await queryInterface.dropTable(PLACE_TABLE, PlaceSchema)
    await queryInterface.dropTable(EVIDENCE_TABLE, EvidenceSchema)
    await queryInterface.dropTable(REPORT_TABLE, ReportSchema)
  }
};
