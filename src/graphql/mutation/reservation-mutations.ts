import { MutationFields } from '../query/query-fields-type';
import { reservation } from '../type';
import { GraphQLID, GraphQLNonNull } from 'graphql';
import { ReservationRepository } from '../../db/repository/reservation-repository';
import { prepareReservationDocument } from '../utils/prepare-reservation';

export const reservationMutations: MutationFields = {
    reservation: {
        type: reservation,
        args: {
            user: { type: new GraphQLNonNull(GraphQLID) },
            slot: { type: new GraphQLNonNull(GraphQLID) },
            service: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: async (source, {user, slot, service}) => {
            const reservation = await ReservationRepository.save({user, service, slot});
            return prepareReservationDocument(reservation);
        }
    },
    removeReservation: {
        type: reservation,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: async (source, {id}) => {
            const reservation = await ReservationRepository.remove(id).then();
            return prepareReservationDocument(reservation);
        }
    }
};
