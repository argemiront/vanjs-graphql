const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const authenticationMiddleware = require('./utils/authentication');
const { applyMiddleware } = require('graphql-middleware');
const schemaDirectives = require('./graphql/directives');
const extensions = require('./graphql/extensions');
const dataLoaders = require('./utils/dataloaders');
const middleware = require('./graphql/middleware');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/schemas');
const db = require('./utils/database');

const schema = makeExecutableSchema({ typeDefs, resolvers, schemaDirectives });
const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

const config = {
  schema: schemaWithMiddleware,
  extensions,
  context: async (ctx) => {

    const { user } = await authenticationMiddleware(ctx, db);

    return {
      db,
      user,
      stats: {
        startTime: new Date(),
      },
      loaders: dataLoaders,
    };

  },
};

const server = new ApolloServer(config);

server.listen({ port: 3000 }).then(({ url }) => console.log(`serving at: ${url}`));