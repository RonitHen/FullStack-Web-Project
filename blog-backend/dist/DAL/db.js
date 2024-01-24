"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    password: 'pgAdmin16538',
    host: 'localhost',
    database: 'blog-DB',
    port: 5432,
});
exports.default = pool;
