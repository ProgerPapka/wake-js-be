import { UserModel, User, UserFilters, UserUpdatedFields, UserDocument } from '../model';
import { BasicModifiableRepository } from './basic/basic-modifiable-repository';
import { DocumentQuery, Schema } from 'mongoose';
import { BasicReadableRepository } from './basic/basic-readable-repository';

export interface UserRepositoryType
    extends BasicReadableRepository<User, UserDocument>,
        BasicModifiableRepository<User, UserUpdatedFields, UserDocument> {}

class UserRepositoryImpl implements UserRepositoryType {
    public remove(id: Schema.Types.ObjectId): DocumentQuery<UserDocument, UserDocument> {
        return UserModel.findByIdAndDelete(id);
    }
    public save(model: User): Promise<UserDocument> {
        return new UserModel(model).save();
    }
    public update(id: Schema.Types.ObjectId, model: UserUpdatedFields): DocumentQuery<UserDocument, UserDocument> {
        return UserModel.findByIdAndUpdate(id, model);
    }
    public findById(id: Schema.Types.ObjectId): DocumentQuery<UserDocument, UserDocument> {
        return UserModel.findById(id);
    }
    public findAll(): DocumentQuery<Array<UserDocument>, UserDocument> {
        return UserModel.find();
    }
    public find(filters: UserFilters): DocumentQuery<Array<UserDocument>, UserDocument> {
        return UserModel.find({
            name: new RegExp(`^${filters.nameLike}$`, 'i'),
            surname: new RegExp(`^${filters.surnameLike}$`, 'i'),
            middlename: new RegExp(`^${filters.middlenameLike}$`, 'i'),
            phone: new RegExp(`^${filters.phoneLike}$`, 'i'),
            email: new RegExp(`^${filters.emailLike}$`, 'i')
        });
    }
}

export const UserRepository = new UserRepositoryImpl();
