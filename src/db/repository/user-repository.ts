import { user, User, UserDocument } from '../model';
import { BasicModifiableRepository } from './basic/basic-modifiable-repository';

export interface UserRepositoryType
    extends BasicModifiableRepository<User, UserDocument>,
        BasicModifiableRepository<User, UserDocument> {}
