const lib = require('./lib');

module.exports = {
  Person: {
    interests: (obj, args, ctx, info) => {

      return {...obj};

    },
    friends: (obj, args, ctx, info) => {

      return obj.friends.map(item => lib.person.getByID(item, ctx));

    },
  },

  Interests: {
    hiking: (obj, args, ctx, info) => {

      return obj.interests.map(item => lib.interests.getHike(item)).filter(i => i);

    },
    concert: (obj, args, ctx, info) => {

      return obj.interests.map(item => lib.interests.getConcert(item)).filter(i => i);

    },
    watchList: (obj, args, ctx, info) => {

      return obj.interests.map(item => lib.interests.getTVShow(item)).filter(i => i);

    },
  },
};