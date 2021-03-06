const { ApolloServer, gql } = require("apollo-server");

// The GraphQL schema
const typeDefs = gql`
  type User {
    username: String!
    email: String!
  }
  type Query {
    getUsers: [User]!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    getUsers: () => {
      const users = [
        {
          username: "Parth",
          email: "z@gmail.com",
        },
        {
          username: "Ujas",
          email: "x@gmail.com",
        },
      ];
      return users;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
