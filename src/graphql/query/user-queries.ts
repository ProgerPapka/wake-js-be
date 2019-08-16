import { QueryFields } from '../mutation/mutation-fields-type';
import { user as userType } from '../type';
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql';
import { UserRepository } from '../../db/repository/user-repository';

export const userQueries: QueryFields = {
    user: {
        type: userType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => UserRepository.findById(id)
    },
    users: {
        type: new GraphQLNonNull(new GraphQLList(userType)),
        resolve: (source, args) => UserRepository.findAll()
    }
};
