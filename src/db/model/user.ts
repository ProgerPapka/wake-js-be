import { Document, Schema, model } from 'mongoose';

export interface User {
    name: string;
    surname: string;
    middlename: string;
    phone: string;
    email: string;
    password: string;
}

export interface UserDocument extends Document, User {}

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    middlename: { type: String },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const user = model<UserDocument>('User', UserSchema);
