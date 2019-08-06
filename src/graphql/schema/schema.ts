import { GraphQLSchema } from 'graphql';
import { Query } from '../query/general-queries';
import { Mutation } from '../mutation/general-mutations';

export const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
