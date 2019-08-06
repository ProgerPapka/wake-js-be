import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const user = new GraphQLObjectType({
  name: 'User',
  fields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      name: {type: new GraphQLNonNull(GraphQLString)},
      surname: {type: new GraphQLNonNull(GraphQLString)},
      middlename: {type: GraphQLString},
      phone: {type: new GraphQLNonNull(GraphQLString)},
      email: {type: new GraphQLNonNull(GraphQLString)},
      password: {type: new GraphQLNonNull(GraphQLString)}
  }
});
