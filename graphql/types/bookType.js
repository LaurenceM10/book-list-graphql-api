const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

let bookType = new GraphQLObjectType({
    name: 'BookType',
    description: 'This represent a Book',
    fields: () => ({
        id: new GraphQLNonNull(GraphQLID),
        title: new GraphQLNonNull(GraphQLString),
        author: new GraphQLNonNull(GraphQLString),
        pages: new GraphQLNonNull(GraphQLInt),
    })
});

module.exports = bookType;