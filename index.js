const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    """
    Fetches a person's data and interests
    """
    me: Person
  }

  """
  A Person
  """
  type Person {
    id: ID!
    name: String!
    interests: Interests
    friends: [Person]!
  }

  type Interests {
    hiking: [String]!
    concert: [String]!
    watchList: [String]!
  }
`;

const resolvers = {
  Query: {
    me: (_, args, ctx, info) => {
      return {
        id: '1',
        name: 'Argemiro Neto',
        friends: [],
        interests: {},
      };
    },
  },
  Interests: {
    hiking: (parent, args, ctx, info) => {
      return [
        'Garibaldi Lake',
        'Diez Vistas',
        'Stanley Park'
      ];
    },
    concert: (parent, args, ctx, info) => {
      return [
        'Cirque du Soleil',
        'WOW Jazz Orchestra'
      ];
    },
    watchList: (parent, args, ctx, info) => {
      return [
        'Dark',
        'Avatar the Last Airbender'
      ];
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 3000 }).then(({ url }) => console.log(`serving at: ${url}`));
