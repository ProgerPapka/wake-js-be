import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './graphql';

const port = 3000;

const app = express();

app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);
