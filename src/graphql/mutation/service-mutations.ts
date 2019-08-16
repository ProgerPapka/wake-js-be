import { MutationFields } from '../query/query-fields-type';
import { service } from '../type';
import { GraphQLFloat, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { ServiceRepository } from '../../db/repository/service-repository';

export const serviceMutations: MutationFields = {
    service: {
        type: service,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            description: { type: new GraphQLNonNull(GraphQLString) },
            price: { type: new GraphQLNonNull(GraphQLFloat) },
            photos: { type: new GraphQLList(GraphQLID) }
        },
        resolve: (source, { name, description, price, photos = [] }) =>
            ServiceRepository.save({
                name,
                description,
                price,
                photos
            })
    },
    photos: {
        type: service,
        args: {
            service: { type: new GraphQLNonNull(GraphQLID) },
            photos: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
        },
        resolve: (source, { service, photos }) => ServiceRepository.findById(service).then(res => res.photos)
    },
    removeService: {
        type: service,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => ServiceRepository.remove(id)
    }
};
