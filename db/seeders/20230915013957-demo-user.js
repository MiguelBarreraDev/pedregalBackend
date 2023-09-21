'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos', [
      {
        name: 'DISCRIMINACION',
        created_at: new Date(),
      },
      {
        name: 'ACOSO LABORAL',
        created_at: new Date(),
      },
      {
        name: 'REPRESALIAS',
        created_at: new Date(),
      },
      {
        name: 'CONFLICTO DE INTERESES',
        created_at: new Date(),
      },
      {
        name: 'MEDIO AMBIENTE',
        created_at: new Date(),
      },
      {
        name: 'SALUD OCUPACIONAL',
        created_at: new Date(),
      },
      {
        name: 'ACOSO SEXUAL',
        created_at: new Date(),
      },
      {
        name: 'ROBO O HURTO',
        created_at: new Date(),
      },
      {
        name: 'CORRUPCIÓN / SOBORNOS / REGALOS',
        created_at: new Date(),
      },
      {
        name: 'COMISIONES ILEGALES',
        created_at: new Date(),
      },
      {
        name: 'DESHONESTIDAD',
        created_at: new Date(),
      },
      {
        name: 'FUGA DE INFORMACION CONFIDENCIAL',
        created_at: new Date(),
      },
      {
        name: 'LAVADO DE DINERO',
        created_at: new Date(),
      },
      {
        name: 'TRAFICO DE INFLUENCIAS',
        created_at: new Date(),
      },
      {
        name: 'COLUSION',
        created_at: new Date(),
      },
      {
        name: 'INCUMPLIMIENTO DE POLITICAS / PROCEDIMIENTOS',
        created_at: new Date(),
      },
      {
        name: 'OTROS QUE IMPLIQUE PERJUICIO ECONOMICO',
        created_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('conditions', [
      {
        name: 'ENVIADA',
        create_at: new Date(),
      },
      {
        name: 'RECIBIDA',
        create_at: new Date(),
      },
      {
        name: 'EN PROCESO',
        create_at: new Date(),
      },
      {
        name: 'ARCHIVADA',
        create_at: new Date(),
      },
      {
        name: 'RESUELTA',
        create_at: new Date(),
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
