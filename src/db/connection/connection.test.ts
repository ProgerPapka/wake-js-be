import { DbConnection } from './connection';

describe('connection to mongo-db', () => {
    it('connection to mongo cloud', async () => {
        await DbConnection.connect();
        await DbConnection.close();
    });
});
