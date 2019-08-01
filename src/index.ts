import express from 'express';
import graphqlHTTP from 'express-graphql';

const port = 3000;

const app = express();
DbConnection.connect();
app.use(
  '/',
  graphqlHTTP({
    graphiql: true,
    schema: null
  })
);

app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);
