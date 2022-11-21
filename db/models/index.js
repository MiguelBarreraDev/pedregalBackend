const { Report, ReportSchema } = require('./report.model');
const { Tipos, TiposSchema } = require('./tipos.model');
// const { Person, PersonSchema } = require('./person.model');
// const { Place, PlaceSchema } = require('./place.model');
// const { Evidence, EvidenceSchema } = require('./evidence.model')
// const { Condition, ConditionSchema } = require('./condition.model')

function setupModels(sequelize){
  Tipos.init(TiposSchema, Tipos.config(sequelize));
  Report.init(ReportSchema, Report.config(sequelize));
  // Person.init(PersonSchema, Person.config(sequelize));
  // Place.init(PlaceSchema, Place.config(sequelize));
  // Evidence.init(EvidenceSchema, Evidence.config(sequelize));
  // Condition.init(ConditionSchema, Condition.config(sequelize));


  // Person.associate(sequelize.models)
  // Place.associate(sequelize.models)
  // Evidence.associate(sequelize.models)
  Report.associate(sequelize.models)

}

module.exports = setupModels
