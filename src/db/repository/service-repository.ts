import { ServiceModel, Service, ServiceFilters, ServiceUpdatedFields, ServiceDocument } from '../model';
import { BasicModifiableRepository } from './basic/basic-modifiable-repository';
import { DocumentQuery, Schema } from 'mongoose';
import { BasicReadableRepository } from './basic/basic-readable-repository';

export interface ServiceRepositoryType
    extends BasicReadableRepository<Service, ServiceDocument>,
        BasicModifiableRepository<Service, ServiceUpdatedFields, ServiceDocument> {
    addPhotos: (id: Schema.Types.ObjectId, photos: Array<string>) => DocumentQuery<Service, ServiceDocument>;
}

class ServiceRepositoryImpl implements ServiceRepositoryType {
    public remove(id: Schema.Types.ObjectId): DocumentQuery<ServiceDocument, ServiceDocument> {
        return ServiceModel.findByIdAndDelete(id);
    }
    public save(model: Service): Promise<ServiceDocument> {
        return new ServiceModel(model).save();
    }
    public update(
        id: Schema.Types.ObjectId,
        model: ServiceUpdatedFields
    ): DocumentQuery<ServiceDocument, ServiceDocument> {
        return ServiceModel.findByIdAndUpdate(id, model);
    }
    public findById(id: Schema.Types.ObjectId): DocumentQuery<ServiceDocument, ServiceDocument> {
        return ServiceModel.findById(id);
    }
    public findAll(): DocumentQuery<Array<ServiceDocument>, ServiceDocument> {
        return ServiceModel.find();
    }
    public find(filters: ServiceFilters): DocumentQuery<Array<ServiceDocument>, ServiceDocument> {
        return ServiceModel.find({
            name: new RegExp(`^${filters.nameLike}$`, 'i'),
            description: new RegExp(`^${filters.descriptionLike}$`, 'i'),
            price: { $gt: filters.priceFrom, $lt: filters.priceTo }
        });
    }
    public addPhotos(id: Schema.Types.ObjectId, photos: Array<string>): DocumentQuery<Service, ServiceDocument> {
        return ServiceModel.findOneAndUpdate(id, { photos: { $push: { photos } } }, { new: true, upsert: true });
    }
}

export const ServiceRepository = new ServiceRepositoryImpl();
