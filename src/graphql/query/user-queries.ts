import { QueryFields } from '../mutation/mutation-fields-type';
import { service, user as userType } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';

export const userQueries: QueryFields = {
    user: {
        type: userType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => ({ test: '12', name: 'ter' }) // TODO: implement
    },
    users: {
        type: new GraphQLNonNull(new GraphQLList(userType)),
        resolve: (source, args) => []
    }
};
