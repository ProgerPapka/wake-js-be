import { QueryFields } from '../mutation/mutation-fields-type';
import { service } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { ServiceRepository } from '../../db/repository/service-repository';

export const serviceQueries: QueryFields = {
    service: {
        type: service,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, {id}) => ServiceRepository.findById(id)
    },
    services: {
        type: new GraphQLNonNull(new GraphQLList(service)),
        args: {
            name: { type: GraphQLString }
        },
        resolve: (source, args) => ServiceRepository.findAll()
    }
};
