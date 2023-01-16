"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cars_router_1 = __importDefault(require("./routers/cars.router"));
const logs_router_1 = __importDefault(require("./routers/logs.router"));
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use('/api', cars_router_1.default);
app.use('/api', logs_router_1.default);
app.use(ErrorHandler_1.default.handle);
exports.default = app;
