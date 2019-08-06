import { GraphQLObjectType } from 'graphql';
import { userMutations } from './user-mutations';

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...userMutations
  }
});
