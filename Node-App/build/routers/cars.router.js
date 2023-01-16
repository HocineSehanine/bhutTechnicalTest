"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carsController = require('../controllers/cars.controller');
const routes = (0, express_1.Router)();
routes.get('/listCars', carsController.listAllCars);
routes.post('/createCar', carsController.addNewCar);
exports.default = routes;
