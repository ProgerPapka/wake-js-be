import { MutationFields } from '../query/query-fields-type';
import { reservation } from '../type';
import { GraphQLID, GraphQLNonNull } from 'graphql';
import { ReservationRepository } from '../../db/repository/reservation-repository';

export const reservationMutations: MutationFields = {
    reservation: {
        type: reservation,
        args: {
            user: { type: new GraphQLNonNull(GraphQLID) },
            slot: { type: new GraphQLNonNull(GraphQLID) },
            service: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { user, slot, service }) => ReservationRepository.save({ user, service, slot })
    },
    removeReservation: {
        type: reservation,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => ReservationRepository.remove(id)
    }
};
