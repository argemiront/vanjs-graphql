const path = require('path');
const { fileLoader, mergeTypes } = require('merge-graphql-schemas');

const typesArray = fileLoader(__dirname);
 
const typesDefs = mergeTypes(typesArray);

module.exports = typesDefs;