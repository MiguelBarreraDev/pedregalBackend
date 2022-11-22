const { Model, DataTypes, Sequelize } = require('sequelize');
const { REPORT_TABLE } = require('./report.model')

const PLACE_TABLE = 'places'

const PlaceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  reportId:{
    field: 'report_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: REPORT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Place extends Model {
  static associate(models) {
    this.belongsTo(models.Report, {as: 'report'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PLACE_TABLE,
      modelName: 'Place',
      timestamps: false
    }
  }
}

module.exports = { PLACE_TABLE, PlaceSchema, Place}
