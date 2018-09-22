const {
    GraphQLList
} = require('graphql');

// Require the sequelize book model
const bookModel = require('../../../models/book');

// Require the graphql bookType
const bookType = require('../../types/bookType');

// All books query
const allBooks = {
    name: 'Books',
    description: 'To get a list of books',
    type: new GraphQLList(bookType),
    resolve(){
        return bookModel.findAll();
    }
};

module.exports = allBooks;