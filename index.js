import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// db
import db from "./_db.js";
// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    authors() {
      return db.authors;
    },
    reviews() {
      return db.reviews;
    },
  },
};

const server = new ApolloServer({
  // typeDefs -- definitions of types of data
  typeDefs,
  resolvers,
  // resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
