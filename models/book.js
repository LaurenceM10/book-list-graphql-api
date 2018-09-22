const sequelize = require('../database/');
const Sequelize = require('sequelize');

let book = sequelize.define('book', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    pages: Sequelize.INTEGER,
});

module.exports = book;