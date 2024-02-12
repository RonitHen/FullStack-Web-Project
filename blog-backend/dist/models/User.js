"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, name, first_name, admin) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.first_name = first_name;
        this.admin = admin;
    }
}
exports.default = User;
