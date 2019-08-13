import { Document, Schema, model } from 'mongoose';

export interface Service {
    name: string;
    description: string;
    price: number;
    photos: Array<string>;
}

export interface ServiceDocument extends Document, Service {}

export const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    photos: {
        type: [String],
        required: false,
        default: []
    }
});

export const service = model<ServiceDocument>('Service', ServiceSchema);
