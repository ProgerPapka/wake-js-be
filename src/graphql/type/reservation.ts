import { GraphQLID, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { user } from './user';
import { service } from './service';
import { slot } from './slot';

export const reservation = new GraphQLObjectType({
  name: 'Reservation',
  fields: {
      id: {type: new GraphQLNonNull(GraphQLID)},
      user: {type: new GraphQLNonNull(user)},
      service: {type: new GraphQLNonNull(service)},
      slot: {type: new GraphQLNonNull(slot)}
  }
});
