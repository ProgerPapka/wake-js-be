import { Schema, DocumentQuery, Document } from 'mongoose';

export interface BasicReadableRepository<T, TDoc extends Document> {
    findById: (id: Schema.Types.ObjectId) => DocumentQuery<TDoc, TDoc>;
    findAll: () => DocumentQuery<Array<TDoc>, TDoc>;
    find: (filters: any) => DocumentQuery<Array<TDoc>, TDoc>;
}
