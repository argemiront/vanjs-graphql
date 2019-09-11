module.exports = {
  Person: {
    friends: (resolve, parent, args, ctx, info) => {

      console.log(`=== Friends list requested by ${parent.name}`);

      return resolve(parent, args, ctx, info);

    },
  },
};