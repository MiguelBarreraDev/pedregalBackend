'use strict';

const { REPORT_TABLE, ReportSchema } = require('../models/report.model')
const { TIPOS_TABLE, TiposSchema } = require('../models/tipos.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(TIPOS_TABLE, TiposSchema)
    await queryInterface.createTable(REPORT_TABLE, ReportSchema)
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
