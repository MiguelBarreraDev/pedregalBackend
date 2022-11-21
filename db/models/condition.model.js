const {Model, DataTypes, Sequelize} = require('sequelize');

const CONDITION_TABLE = "conditions";


const ConditionSchema = {
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
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class Condition extends Model {
  static associate(models){

  }
  static config(sequelize){
    return{

      sequelize,
      tableName: CONDITION_TABLE,
      modelName: 'Condition',
      timestamps: false
    }
  }
}

module.exports = { CONDITION_TABLE, ConditionSchema, Condition}
