const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers');
const fs = require('fs');

const port = 9000;

const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' });

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port }, () => {
        console.log(`Started at http://localhost:${port}${server.graphqlPath}`);
});
