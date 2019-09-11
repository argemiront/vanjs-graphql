const db = require('../../../utils/database');

const person = {
  getByID: (id, ctx) => {
    return ctx.loaders.personLoader.load(id);
    // return db.getPersonById(id);
  },
  listAll: () => db.listPersons(),
};

const interests = {
  getHike: (id) => db.getHikeById(id),
  getConcert: (id) => db.getConcertById(id),
  getTVShow: (id) => db.getTVShowById(id),
};

module.exports = {
  person,
  interests
};