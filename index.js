const { GraphQLServer } = require("graphql-yoga");
const Query = require("./graphql/Query");
const Mutation = require("./graphql/Mutation");

const server = new GraphQLServer({
	typeDefs: "./graphql/typedefs.graphql",
	resolvers: {
    Query,
    Mutation
	},
});

server.start(() => {
	console.log("Server is running");
});
