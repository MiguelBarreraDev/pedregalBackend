const { Model, DataTypes, Sequelize } = require('sequelize');
const { TIPOS_TABLE } = require('./tipos.model');
const { CONDITION_TABLE } = require('./condition.model')

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
  fechaInicio:{
    allowNull: false,
    field: 'fecha_inicio',
    type: DataTypes.DATE,
  },
  fechaFin:{
    allowNull: true,
    field: 'fecha_fin',
    type: DataTypes.DATE
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
  conditionId:{
    field: 'condition_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1,
    references: {
      model: CONDITION_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
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
    });
    this.hasMany(models.Person, {
      as: 'persons',
      foreignKey: 'reportId',
      onDelete: 'cascade',
      hooks: true
    } )
    this.hasMany(models.Place, {
      as: 'places',
      foreignKey: 'reportId',
      onDelete: 'cascade',
      hooks: true
    })
    this.belongsTo(models.Condition, {
      as: 'condition'
    })
    this.hasOne(models.Contact,{
      as: 'contact',
      foreignKey: 'reportId',
      onDelete: 'cascade',
      hooks: true
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
