import { QueryFields } from '../mutation/mutation-fields-type';
import { service } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';

export const serviceQueries: QueryFields = {
    service: {
        type: service,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, args) => ({ name: 'test-serv', price: 2341.34 }) // TODO: implement
    },
    services: {
        type: new GraphQLNonNull(new GraphQLList(service)),
        args: {
            name: { type: GraphQLString }
        },
        resolve: (source, args) => [] // TODO: implement
    }
};
