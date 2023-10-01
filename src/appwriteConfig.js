import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '64e4f55309860d66f4bc'
export const DATABASE_ID = '64e4f717ab8b4c5bfb1d'
export const COLLECTIONS_ID_MESSAGES = '64e4f72eccba47591c4f'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e4f55309860d66f4bc');

export const databases = new Databases(client);
export const account = new Account(client);
export default client;