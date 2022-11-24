const { Report, ReportSchema } = require('./report.model');
const { Tipos, TiposSchema } = require('./tipos.model');
const { Person, PersonSchema } = require('./person.model');
const { Place, PlaceSchema } = require('./place.model');
// const { Evidence, EvidenceSchema } = require('./evidence.model')
const { Condition, ConditionSchema } = require('./condition.model')
const { Contact, ContactSchema} =require('../models/contact.model')

function setupModels(sequelize){
  Tipos.init(TiposSchema, Tipos.config(sequelize));
  Report.init(ReportSchema, Report.config(sequelize));
  Person.init(PersonSchema, Person.config(sequelize));
  Place.init(PlaceSchema, Place.config(sequelize));
  // Evidence.init(EvidenceSchema, Evidence.config(sequelize));
  Condition.init(ConditionSchema, Condition.config(sequelize));
  Contact.init(ContactSchema, Contact.config(sequelize));


  // Evidence.associate(sequelize.models)
  Report.associate(sequelize.models)
  Person.associate(sequelize.models)
  Place.associate(sequelize.models)
  Contact.associate(sequelize.models)

}

module.exports = setupModels
