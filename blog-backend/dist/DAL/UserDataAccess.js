"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataAccess = void 0;
const db_1 = __importDefault(require("../db"));
class UserDataAccess {
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = 'SELECT * FROM users WHERE id = $1';
                const result = yield db_1.default.query(query, [id]);
                if (result.rows.length > 0) {
                    return result.rows[0];
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error('Error getting user by ID', error);
                throw error;
            }
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if the user already exists in the database
                const existingUser = yield this.getById(user.id);
                // If the user exists, return an indication that the user was not added
                if (existingUser) {
                    return `User ${user.email} already exists`;
                }
                // If the user doesn't exist, proceed to add the user
                const query = 'INSERT INTO users (id, email, name, admin) VALUES ($1, $2, $3, $4) RETURNING id';
                const result = yield db_1.default.query(query, [user.id, user.email, user.name, user.admin]);
                return `User ${user.email} created successfully`;
            }
            catch (error) {
                console.error('Error adding user', error);
                throw error;
            }
        });
    }
}
exports.UserDataAccess = UserDataAccess;
