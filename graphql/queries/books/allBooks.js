const {
    GraphQLList,
    GraphQLObjectType
} = require('graphql');

// Require the sequelize book model
const bookModel = require('../../../models/book');

// Require the graphql bookType
const bookType = require('../../types/bookType');

const allBooksQuery = {
    books: {
        type: new GraphQLList(bookType),
        args: {},
        resolve: (root, args) => bookModel.findAll()
    }
};

module.exports = allBooksQuery;