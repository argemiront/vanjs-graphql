const { fileLoader } = require('merge-graphql-schemas');

const extensions = fileLoader(__dirname);

module.exports = extensions.map(Ext => () => new Ext());