const {
    GraphQLObjectType,
    GraphQLSchema
} = require('graphql');

// Require the queries to use in schema
const queries = require('../graphql/queries/');

let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'queries',
        field:  queries
    })
});

module.exports = schema;