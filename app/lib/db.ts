import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URL!);

const globalWithMongo = globalThis as typeof globalThis & { _mongo?: MongoClient };

export const db = (globalWithMongo._mongo ?? client).db();

if (process.env.NODE_ENV !== "production") globalWithMongo._mongo = client;
