const {
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

// Require the queries to use in schema
const queries = require('./queries/');

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    })
});

module.exports = schema;