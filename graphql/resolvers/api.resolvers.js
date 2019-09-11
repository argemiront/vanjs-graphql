
const lib = require('./lib');

const Query = {
  me: (_, args, ctx, info) => {
    return lib.person.getByID('p1');
  },
};

module.exports = {
  Query,
};