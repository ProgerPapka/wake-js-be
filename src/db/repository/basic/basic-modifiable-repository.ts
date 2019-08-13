import { Schema } from 'mongoose';

import { DocumentQuery, Document } from 'mongoose';

export interface BasicModifiableRepository<T, TDoc extends Document> {
    save: (model: any) => Promise<T>;
    remove: (id: Schema.Types.ObjectId) => DocumentQuery<T, TDoc>;
}
