'use strict';

const {PLACE_TABLE, PlaceSchema} = require('../models/place.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PLACE_TABLE, PlaceSchema)
  },

  async down (queryInterface, Sequelize) {

  }
};
