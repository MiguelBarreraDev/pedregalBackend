const {Model, DataTypes, Sequelize} = require('sequelize');

const TIPOS_TABLE = "tipos";


const TiposSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },

}

class Tipos extends Model {
  static associate(models){
  }
  static config(sequelize){
    return{

      sequelize,
      tableName: TIPOS_TABLE,
      modelName: 'Tipos',
      timestamps: false
    }
  }
}

module.exports = { TIPOS_TABLE, TiposSchema, Tipos}
