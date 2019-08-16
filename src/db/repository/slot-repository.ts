import { SlotModel, Slot, SlotFilters, SlotUpdatedFields, SlotDocument } from '../model';
import { BasicModifiableRepository } from './basic/basic-modifiable-repository';
import { DocumentQuery, Schema } from 'mongoose';
import { BasicReadableRepository } from './basic/basic-readable-repository';

export interface SlotRepositoryType
    extends BasicReadableRepository<Slot, SlotDocument>,
        BasicModifiableRepository<Slot, SlotUpdatedFields, SlotDocument> {}

class SlotRepositoryImpl implements SlotRepositoryType {
    public remove(id: Schema.Types.ObjectId): DocumentQuery<Slot, SlotDocument> {
        return SlotModel.findByIdAndDelete(id);
    }
    public save(model: Slot): Promise<Slot> {
        return new SlotModel(model).save();
    }
    public update(id: Schema.Types.ObjectId, model: SlotUpdatedFields): DocumentQuery<Slot, SlotDocument> {
        return SlotModel.findByIdAndUpdate(id, model);
    }
    public findById(id: Schema.Types.ObjectId): DocumentQuery<Slot, SlotDocument> {
        return SlotModel.findById(id);
    }
    public findAll(): DocumentQuery<Array<Slot>, SlotDocument> {
        return SlotModel.find();
    }
    public find(filters: SlotFilters): DocumentQuery<Array<Slot>, SlotDocument> {
        return SlotModel.find({
            value: { $gte: filters.startDate, $lte: filters.endDate }
        });
    }
}

export const SlotRepository = new SlotRepositoryImpl();
