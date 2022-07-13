const { ApolloServer } = require("apollo-server");

const { sequelize } = require("./models/index");

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

  sequelize
    .authenticate()
    .then(() => {
      console.log("Databse connected!");
    })
    .catch((err) => {
      console.log(err);
    });
});
