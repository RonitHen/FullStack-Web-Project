import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    password: 'pgAdmin16538',
    host: 'localhost',
    database: 'blog-DB',
    port: 5432,
});

export default pool;