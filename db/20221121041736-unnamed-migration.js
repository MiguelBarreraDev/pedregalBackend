'use strict';

const { REPORT_TABLE, ReportSchema } = require('../models/report.model')
const { TIPOS_TABLE, TiposSchema } = require('../models/tipos.model')
const { PERSON_TABLE, PersonSchema } = require('../models/person.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TIPOS_TABLE, TiposSchema)
    await queryInterface.createTable(REPORT_TABLE, ReportSchema)
    await queryInterface.createTable(PERSON_TABLE, PersonSchema)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
