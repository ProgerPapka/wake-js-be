import { MutationFields } from '../query/query-fields-type';
import { slot } from '../type';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { SlotRepository } from '../../db/repository/slot-repository';

export const slotMutations: MutationFields = {
    slot: {
        type: slot,
        args: {
            startDate: { type: new GraphQLNonNull(GraphQLString) },
            endDate: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (source, { startDate, endDate }) =>
            SlotRepository.save({ startDate: new Date(startDate), endDate: new Date(endDate) })
    },
    removeSlot: {
        type: slot,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => SlotRepository.remove(id)
    }
};
