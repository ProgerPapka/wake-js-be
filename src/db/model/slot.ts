import { Document, Schema, model } from 'mongoose';

export interface Slot {
    startDate: Date;
    endDate: Date;
}

export interface SlotFilters {
    startDate?: Date;
    endDate?: Date;
}

export interface SlotUpdatedFields {
    startDate?: Date;
    endDate?: Date;
}

export interface SlotDocument extends Document, Slot {}

export const SlotSchema = new Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

export const SlotModel = model<SlotDocument>('Slot', SlotSchema);
