import { QueryFields } from '../mutation/mutation-fields-type';
import { reservation } from '../type';
import { map } from 'lodash';
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { ReservationRepository } from '../../db/repository/reservation-repository';
import { prepareReservationDocument } from '../utils/prepare-reservation';

export const reservationQueries: QueryFields = {
    reservation: {
        type: reservation,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: async (source, { id }) => {
            const reservation = await ReservationRepository.findById(id);
            return prepareReservationDocument(reservation);
        }
    },
    reservations: {
        type: new GraphQLNonNull(new GraphQLList(reservation)),
        args: {
            user: { type: GraphQLID },
            service: { type: GraphQLID }
        },
        resolve: async (source, args) => {
            const reservations = await ReservationRepository.findAll().exec();
            return await Promise.all(map(reservations, (reservation) => prepareReservationDocument(reservation)));
        }
    }
};
