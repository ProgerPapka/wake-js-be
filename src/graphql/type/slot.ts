import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const slot = new GraphQLObjectType({
  name: 'Slot',
  fields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      startDate: {type: new GraphQLNonNull(GraphQLString)},
      endDate: {type: new GraphQLNonNull(GraphQLString)}
  }
});
