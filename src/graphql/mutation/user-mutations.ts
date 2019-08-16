import { MutationFields } from '../query/query-fields-type';
import { user } from '../type';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { UserRepository } from '../../db/repository/user-repository';

export const userMutations: MutationFields = {
    user: {
        type: user,
        args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            surname: { type: new GraphQLNonNull(GraphQLString) },
            middlename: { type: GraphQLString },
            phone: { type: new GraphQLNonNull(GraphQLString) },
            email: { type: new GraphQLNonNull(GraphQLString) },
            password: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (source, { name, surname, middlename, phone, email, password }) =>
            UserRepository.save({
                name,
                surname,
                middlename,
                phone,
                email,
                password
            })
    },
    removeUser: {
        type: user,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (source, { id }) => UserRepository.remove(id)
    }
};
