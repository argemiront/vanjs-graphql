const { fileLoader } = require('merge-graphql-schemas');

const middleware = fileLoader(__dirname);

module.exports = middleware;