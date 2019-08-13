import { Document, Schema, model } from 'mongoose';

export interface Slot {
    value: Date;
    date: string;
    from: string;
    to: string;
}

export interface SlotDocument extends Document, Slot {}

export const SlotSchema = new Schema({
    value: {
        type: Date,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
});

export const slot = model<SlotDocument>('Slot', SlotSchema);
