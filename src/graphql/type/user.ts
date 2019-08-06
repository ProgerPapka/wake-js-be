import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const user = new GraphQLObjectType({
  name: 'user',
  fields: {
      name: {type: new GraphQLNonNull(GraphQLString)},
      surname: {type: new GraphQLNonNull(GraphQLString)},
      middlename: {type: GraphQLString},
      phone: {type: new GraphQLNonNull(GraphQLString)},
      email: {type: new GraphQLNonNull(GraphQLString)},
      password: {type: new GraphQLNonNull(GraphQLString)}
  }
});
