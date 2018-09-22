const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./graphql/');
const sequelize = require('./database/');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
    
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(4000);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
