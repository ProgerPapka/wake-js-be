import { GraphQLObjectType } from 'graphql';
import { userQueries } from './user-queries';
import { reservationQueries } from './reservation-queries';
import { slotQueries } from './slot-queries';
import { serviceQueries } from './service-queries';

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...userQueries,
        ...reservationQueries,
        ...slotQueries,
        ...serviceQueries
    }
});
