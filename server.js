const { ApolloServer } = require("apollo-server");

// The GraphQL schema
const typeDefs = require("./grapgql/typeDefs");
// A map of functions which return data for the schema.
const resolvers = require("./grapgql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
