import { QueryFields } from '../mutation/mutation-fields-type';
import { reservation, service } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { ReservationRepository } from '../../db/repository/reservation-repository';

export const reservationQueries: QueryFields = {
    reservation: {
        type: reservation,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => ReservationRepository.findById(id)
    },
    reservations: {
        type: new GraphQLNonNull(new GraphQLList(reservation)),
        args: {
            user: { type: GraphQLID },
            service: { type: GraphQLID }
        },
        resolve: (source, args) => ReservationRepository.findAll()
    }
};
