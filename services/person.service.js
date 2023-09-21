const { models } = require('../libs/sequelize');

class PersonService {
  constructor() {}

  async create(data) {
    const newPerson = await models.Person.create(data);
    return newPerson;
  }

  async find() {
    const persons = await models.Person.findAll({
      include: ['report'],
    });
    return persons;
  }
}

module.exports = PersonService;
