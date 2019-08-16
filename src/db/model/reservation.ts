import { Document, Schema, model, Types } from 'mongoose';

export interface Reservation {
    user: Schema.Types.ObjectId;
    service: Schema.Types.ObjectId;
    slot: Schema.Types.ObjectId;
}

export interface ReservationFilters {
    user?: Schema.Types.ObjectId;
    service?: Schema.Types.ObjectId;
    slot?: Schema.Types.ObjectId;
}

export interface ReservationUpdatedFields {
    service?: Schema.Types.ObjectId;
    slot?: Schema.Types.ObjectId;
}

export interface ReservationDocument extends Document, Reservation {}

export const ReservationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    service: {
        type: Schema.Types.ObjectId,
        required: true
    },
    slot: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export const ReservationModel = model<ReservationDocument>('Reservation', ReservationSchema);
