import { GraphQLObjectType } from 'graphql';
import { userQueries } from './user-queries';

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...userQueries
  }
});
