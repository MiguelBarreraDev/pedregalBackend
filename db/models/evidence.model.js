const { Model, DataTypes, Sequelize } = require('sequelize');
const { REPORT_TABLE } = require('./report.model')

const EVIDENCE_TABLE = 'evidence'

const EvidenceSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  evidence:{
    allowNull: true,
    type: DataTypes.BIGINT,
  },
  // reportId:{
  //   field: 'report_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: REPORT_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'
  // },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Evidence extends Model{
  static associate(models) {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: EVIDENCE_TABLE,
      modelName: 'Evidence',
      timestamps: false
    }
  }
}

module.exports = { EVIDENCE_TABLE, EvidenceSchema, Evidence}

