const { ApolloServer, PubSub } = require ('apollo-server');
// const gql = require ('graphql-tag');
const mongoose = require('mongoose');
/// dependencies ^^^^^

/// relative imports
const typeDefs = require('./graphql/typeDefs');
// const Post = require('./models/Post');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require ('./config.js');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});

mongoose
    .connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen ({ port: 3001 });
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
});
