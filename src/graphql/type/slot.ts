import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const slot = new GraphQLObjectType({
  name: 'Slot',
  fields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      date: {type: new GraphQLNonNull(GraphQLString)},
      from: {type: new GraphQLNonNull(GraphQLString)},
      to: {type: new GraphQLNonNull(GraphQLString)}
  }
});
