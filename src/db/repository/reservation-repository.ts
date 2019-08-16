import {
    ReservationModel,
    Reservation,
    ReservationFilters,
    ReservationUpdatedFields,
    ReservationDocument
} from '../model';
import { BasicModifiableRepository } from './basic/basic-modifiable-repository';
import { DocumentQuery, Schema } from 'mongoose';
import { BasicReadableRepository } from './basic/basic-readable-repository';

export interface ReservationRepositoryType
    extends BasicReadableRepository<Reservation, ReservationDocument>,
        BasicModifiableRepository<Reservation, ReservationUpdatedFields, ReservationDocument> {}

class ReservationRepositoryImpl implements ReservationRepositoryType {
    public remove(id: Schema.Types.ObjectId): DocumentQuery<Reservation, ReservationDocument> {
        return ReservationModel.findByIdAndDelete(id);
    }
    public save(model: Reservation): Promise<Reservation> {
        return new ReservationModel(model).save();
    }
    public update(
        id: Schema.Types.ObjectId,
        model: ReservationUpdatedFields
    ): DocumentQuery<Reservation, ReservationDocument> {
        return ReservationModel.findByIdAndUpdate(id, model);
    }
    public findById(id: Schema.Types.ObjectId): DocumentQuery<Reservation, ReservationDocument> {
        return ReservationModel.findById(id);
    }
    public findAll(): DocumentQuery<Array<Reservation>, ReservationDocument> {
        return ReservationModel.find();
    }
    public find(filters: ReservationFilters): DocumentQuery<Array<Reservation>, ReservationDocument> {
        return ReservationModel.find(filters);
    }
}

export const ReservationRepository = new ReservationRepositoryImpl();
