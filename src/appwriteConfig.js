import { Client, Account, Databases } from 'appwrite';

// export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = '2248'
export const DATABASE_ID = '64a887f9e3f46c2bb3f3'
export const COLLECTION_ID_MESSAGES = '64a8881f4c102bf5c1f0'


const client=new Client();

    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('2248');


export const account = new Account(client);
export const databases = new Databases(client)

export default client;