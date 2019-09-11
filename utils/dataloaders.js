const Dataloader = require('dataloader');
const db = require('./database');

const personMapper = async personsIDs => personsIDs.map(id => db.getPersonById(id));
const personLoader = new Dataloader(personMapper);

module.exports = {
  personLoader,
};