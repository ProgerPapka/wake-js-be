import { QueryFields } from '../mutation/mutation-fields-type';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { service, slot } from '../type';

export const slotQueries: QueryFields = {
    slot: {
        type: slot,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, args) => ({ date: '12.12.2019' }) // TODO: implement
    },
    slots: {
        type: new GraphQLNonNull(new GraphQLList(slot)),
        args: {
            dateFrom: { type: GraphQLString },
            dateTo: { type: GraphQLString },
            timeFrom: { type: GraphQLString },
            timeTo: { type: GraphQLString }
        },
        resolve: (source, args) => [] // TODO: implement
    }
};
