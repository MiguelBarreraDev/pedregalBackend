const { Model, DataTypes, Sequelize } = require('sequelize');
const { TIPOS_TABLE } = require('./tipos.model');
// const { PERSON_TABLE } = require('../models/person.model')

const REPORT_TABLE = 'reports'

const ReportSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  tiposId:{
    field: 'tipos_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TIPOS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  fechaSuceso:{
    allowNull: false,
    field: 'fecha_suceso',
    type: DataTypes.DATE,

  },
  description:{
    allowNull: false,
    type: DataTypes.TEXT
  },
  res1:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res2:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res3:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res4:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res5:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res6:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res7:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  res8:{
    allowNull: true,
    type: DataTypes.TEXT
  },
  anonymous:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone:{
    allowNull: true,
    type: DataTypes.STRING
  },
  // statusId:{
  //   field: 'status_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   unique: true,
  //   references: {
  //     model: STATUS_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'
  // },
  observation: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Report extends Model{
  static associate(models) {
    this.belongsTo(models.Tipos, {
      as: 'tipos',
      // foreignKey: {
      //   name: 'tiposId'
      // }
    });
    this.hasMany(models.Person, {
      as: 'persons',
      foreignKey: 'reportId'
    } )
    this.hasMany(models.Place, {
      as: 'places',
      foreignKey: 'reportId'
    })

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REPORT_TABLE,
      modelName: 'Report',
      timestamps: false
    }
  }
}

module.exports = { REPORT_TABLE, ReportSchema, Report}
