import express from 'express';
import graphqlHTTP from 'express-graphql';
import { Schema } from './graphql';
import { DbConnection } from './db/connection';
import { noop } from 'lodash';

const port = 3000;

const app = express();
DbConnection.connect().then(noop);

app.use(
    '/grphql',
    graphqlHTTP({
        graphiql: true,
        schema: Schema
    })
);

app.listen(port);
console.log(`GraphQL API server running at localhost: http://localhost:${port}/grphql`);
