import { Kysely, PostgresDialect } from 'kysely';

import { Pool } from 'pg';
import fs from 'fs'
import {join} from "path";

export interface IWordsTable {
    id?: number;
    text_value: string;
    created: Date;
    deleted: boolean;
}

export interface ITTSDatabase {
    words: IWordsTable;
}

const dbDir = join(process.cwd(), "backend");
const ca = fs.readFileSync(dbDir + "/ca-certificate.crt");

const db = new Kysely<ITTSDatabase>({
    dialect:new PostgresDialect({
        pool: new Pool({
            //@ts-ignore
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            port: process.env.DB_PORT,
            max: 10,
            password:process.env.DB_PWD,
            ssl: {
                ca,
            },
        })
    })});

export default db;