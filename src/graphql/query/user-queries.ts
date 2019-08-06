import { QueryFields } from '../mutation/mutation-fields-type';
import { user as userType } from '../type';

export const userQueries: QueryFields = {
  user: {
    type: userType,
    resolve: (source, args) => ({ test: '12', name: 'ter' }) // TODO: implement
  }
};
