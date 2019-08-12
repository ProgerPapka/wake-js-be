import { QueryFields } from '../mutation/mutation-fields-type';
import { reservation, service } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

export const reservationQueries: QueryFields = {
    reservation: {
        type: reservation,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => ({
            id: '1',
            user: { name: 'test' },
            service: { name: 'test-service' },
            slot: { date: '12.12.2019' }
        }) // TODO: implement
    },
    reservations: {
        type: new GraphQLNonNull(new GraphQLList(reservation)),
        args: {
            user: { type: GraphQLID },
            service: { type: GraphQLID }
        },
        resolve: (source, args) => [] // TODO: implement
    }
};
