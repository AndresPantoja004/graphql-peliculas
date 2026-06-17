const express = require('express');
const { graphqlHTTP } = require('express-graphql');

require('./models');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql',

    graphqlHTTP({

        schema,
        graphiql: true

    })

);

app.listen(3000, () => {

    console.log(`Servidor ejecutándose en http://localhost:${process.env.PORT || 3000}/graphql`);

});