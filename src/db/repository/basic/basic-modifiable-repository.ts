import { Schema } from 'mongoose';

import { DocumentQuery, Document } from 'mongoose';

export interface BasicModifiableRepository<T, TUpd, TDoc extends Document> {
    save: (model: T) => Promise<TDoc>;
    remove: (id: Schema.Types.ObjectId) => DocumentQuery<TDoc, TDoc>;
    update: (id: Schema.Types.ObjectId, model: TUpd) => DocumentQuery<TDoc, TDoc>;
}
