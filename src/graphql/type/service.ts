import { GraphQLFloat, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const service = new GraphQLObjectType({
  name: 'Service',
  fields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      name: {type: new GraphQLNonNull(GraphQLString)},
      description: {type: new GraphQLNonNull(GraphQLString)},
      price: {type: new GraphQLNonNull(GraphQLFloat)},
      photos: {type: new GraphQLList(GraphQLString)}
  }
});
