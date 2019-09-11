
const lib = require('./lib');

const Query = {
  me: (_, args, ctx, info) => {
    return lib.person.getByID(ctx.user.id, ctx);
  },
};

module.exports = {
  Query,
};