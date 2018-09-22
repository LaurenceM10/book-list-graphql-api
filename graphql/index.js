const {
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

// Require the queries to use in schema
const queries = require('./queries/');

let schema = new GraphQLSchema({
    query: queries
});

module.exports = schema;