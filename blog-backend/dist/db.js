"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = new pg_1.Pool({
    ssl: true,
    user: process.env.RENDER_DB_USER,
    password: process.env.RENDER_DB_PASS,
    host: process.env.RENDER_DB_HOST,
    database: process.env.RENDER_DB_NAME,
    port: parseInt(process.env.RENDER_DB_PORT),
});
exports.default = pool;
