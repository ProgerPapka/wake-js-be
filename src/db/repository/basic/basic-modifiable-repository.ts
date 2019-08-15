import { Schema } from 'mongoose';

import { DocumentQuery, Document } from 'mongoose';

export interface BasicModifiableRepository<T, TUpd, TDoc extends Document> {
    save: (model: T) => Promise<T>;
    remove: (id: Schema.Types.ObjectId) => DocumentQuery<T, TDoc>;
    update: (id: Schema.Types.ObjectId, model: TUpd) => DocumentQuery<T, TDoc>;
}
