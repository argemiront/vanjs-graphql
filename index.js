const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 3000 }).then(({ url }) => console.log(`serving at: ${url}`));