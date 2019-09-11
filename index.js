const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const authenticationMiddleware = require('./utils/authentication');
const { applyMiddleware } = require('graphql-middleware');
const gqlMiddleware = require('./graphql/middleware');
const gqlExtensions = require('./graphql/extensions');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schemas');
const db = require('./utils/database');

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema);
// const schemaWithMiddleware = applyMiddleware(schema, ...gqlMiddleware);

const config = {
  schema: schemaWithMiddleware,
  extensions: gqlExtensions,
  context: async (ctx) => {

    const { user } = await authenticationMiddleware(ctx, db);

    return {
      db,
      user,
      stats: {
        startTime: new Date(),
      },
    };

  },
};

const server = new ApolloServer(config);

server.listen({ port: 3000 }).then(({ url }) => console.log(`serving at: ${url}`));