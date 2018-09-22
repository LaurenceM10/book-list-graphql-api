const {
    GraphQLList,
    GraphQLObjectType
} = require('graphql');

// Require the sequelize book model
const bookModel = require('../../../models/book');

// Require the graphql bookType
const bookType = require('../../types/bookType');

const allBooksQuery = new GraphQLObjectType({
    name: 'BookQuery',
    description: 'To get a list of books',
    fields: () => ({
        books: {
            type: new GraphQLList(bookType),
            args: {},
            resolve: (root, args) =>  bookModel.findAll()
        }
    })
});

module.exports = allBooksQuery;