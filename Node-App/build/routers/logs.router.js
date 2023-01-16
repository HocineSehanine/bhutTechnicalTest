"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logsController = require('../controllers/logs.controller');
const routes = (0, express_1.Router)();
routes.get('/logs', logsController.listlogs);
exports.default = routes;
