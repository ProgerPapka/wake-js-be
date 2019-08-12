import { GraphQLObjectType } from 'graphql';
import { userMutations } from './user-mutations';
import { slotMutations } from './slot-mutations';
import { serviceMutations } from './service-mutations';
import { reservationMutations } from './reservation-mutations';

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...userMutations,
        ...slotMutations,
        ...serviceMutations,
        ...reservationMutations
    }
});
