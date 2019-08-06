import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const service = new GraphQLObjectType({
  name: 'service',
  fields: {
      name: {type: new GraphQLNonNull(GraphQLString)},
      description: {type: new GraphQLNonNull(GraphQLString)},
      price: {type: new GraphQLNonNull(GraphQLFloat)},
  }
});
