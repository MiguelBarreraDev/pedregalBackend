const { Model, DataTypes, Sequelize } = require('sequelize');
const { REPORT_TABLE } = require('./report.model')

const CONTACT_TABLE = "contacts";


const ContactSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  reportId:{
    field: 'report_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: REPORT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  relation:{
    allowNull: false,
    type: DataTypes.STRING
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },

}

class Contact extends Model {
  static associate(models){
    this.belongsTo(models.Report, {
      onDelete: 'cascade',
      as: 'report'
    })
  }
  static config(sequelize){
    return{

      sequelize,
      tableName: CONTACT_TABLE,
      modelName: 'Contact',
      timestamps: false
    }
  }
}

module.exports = { CONTACT_TABLE, ContactSchema, Contact}
