import { connect, connection } from 'mongoose';
import * as connectionConfig from './connection-config.json';

export const DbConnection = {
    connect: async () => {
        try {
            await connect(
                connectionConfig.url,
                {
                    user: connectionConfig.login,
                    pass: connectionConfig.password
                }
            );
            console.log('Database connection successful');
        } catch (error) {
            console.error(`Database connection error: ${error}`);
        }
    },
    close: async (): Promise<boolean> => {
        try {
            await connection.close();
            console.log('Database connection has been closed successful');
            return true;
        } catch (error) {
            console.error(`Error closing connection ${error}`);
            return false;
        }
    },
    connection
};
