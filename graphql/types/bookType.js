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
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        author: {
            type: new GraphQLNonNull(GraphQLString)
        },
        pages: {
            type: new GraphQLNonNull(GraphQLInt),
        }
    })
});

module.exports = bookType;