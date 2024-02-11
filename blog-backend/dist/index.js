"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const postsRoutes_1 = __importDefault(require("./routes/postsRoutes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const corsOptions = { origin: 'http://localhost:3000', };
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
const port = 4000;
exports.app.use("/api/posts", postsRoutes_1.default);
exports.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
