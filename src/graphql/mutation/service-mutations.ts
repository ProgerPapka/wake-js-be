import { MutationFields } from '../query/query-fields-type';
import { service } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

export const serviceMutations: MutationFields = {
    service: {
        type: service,
        args: {
            id: { type: GraphQLID },
            name: { type: new GraphQLNonNull(GraphQLID) },
            description: { type: new GraphQLNonNull(GraphQLID) },
            price: { type: new GraphQLNonNull(GraphQLID) },
            photos: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id, name, description, price }) => null
    },
    photos: {
        type: service,
        args: {
            service: { type: new GraphQLNonNull(GraphQLID) },
            photos: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) }
        },
        resolve: (source, {service, photos}) => null
    },
    removeService: {
        type: service,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => null
    }
};
