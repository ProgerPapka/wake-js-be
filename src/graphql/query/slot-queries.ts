import { QueryFields } from '../mutation/mutation-fields-type';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { service, slot } from '../type';
import { SlotRepository } from '../../db/repository/slot-repository';

export const slotQueries: QueryFields = {
    slot: {
        type: slot,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, {id}) => SlotRepository.findById(id)
    },
    slots: {
        type: new GraphQLNonNull(new GraphQLList(slot)),
        args: {
            startDate: { type: GraphQLString },
            endDate: { type: GraphQLString },
        },
        resolve: (source, args) => SlotRepository.findAll()
    }
};
