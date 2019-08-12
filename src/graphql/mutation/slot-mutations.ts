import { MutationFields } from '../query/query-fields-type';
import { slot } from '../type';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

export const slotMutations: MutationFields = {
    slot: {
        type: slot,
        args: {
            id: { type: GraphQLID },
            date: { type: new GraphQLNonNull(GraphQLString) },
            from: { type: new GraphQLNonNull(GraphQLString) },
            to: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (source, { id, date, from, to }) => null
    },
    removeSlot: {
        type: slot,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => null
    }
};
