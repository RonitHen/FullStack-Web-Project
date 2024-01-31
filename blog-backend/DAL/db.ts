import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.POSTGRES_CLOUD_USER,
    password: process.env.POSTGRES_CLOUD_PASS,
    host: process.env.POSTGRES_CLOUD_HOST,
    database: process.env.POSTGRES_CLOUD_DB_NAME,
    port: parseInt(process.env.POSTGRES_CLOUD_PORT!),

});

export default pool;