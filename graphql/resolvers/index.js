const path = require('path');
const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');

const resolversArray = fileLoader(__dirname);
 
const typesResolvers = mergeResolvers(resolversArray);

module.exports = typesResolvers;