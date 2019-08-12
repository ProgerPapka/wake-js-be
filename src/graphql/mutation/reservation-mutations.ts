import { MutationFields } from '../query/query-fields-type';
import { reservation } from '../type';
import { GraphQLID, GraphQLNonNull } from 'graphql';

export const reservationMutations: MutationFields = {
    reservation: {
        type: reservation,
        args: {
            id: {type: GraphQLID},
            user: { type: new GraphQLNonNull(GraphQLID) },
            slot: { type: new GraphQLNonNull(GraphQLID) },
            service: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id, user, slot, service }) => null
    },
    removeReservation: {
        type: reservation,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => null
    }
};
