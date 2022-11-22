const {Model, DataTypes, Sequelize} = require('sequelize')
const { REPORT_TABLE } = require('./report.model')

const PERSON_TABLE = 'persons';

const PersonSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  cargo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  company: {
    allowNull:false,
    type: DataTypes.STRING
  },
  otros: {
    allowNull: true,
    type: DataTypes.TEXT
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
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },

}

class Person extends Model{
  static associate(models) {
    this.belongsTo(models.Report, {as: 'report'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PERSON_TABLE,
      modelName: 'Person',
      timestamps: false
    }
  }
}

module.exports = {PERSON_TABLE, PersonSchema, Person}
