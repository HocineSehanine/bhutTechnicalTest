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
const cars_sevice_1 = __importDefault(require("../services/cars.sevice"));
const listAllCars = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carslist = yield cars_sevice_1.default.listAllCars();
    try {
        if (carslist) {
            return res.status(200).json(carslist);
        }
    }
    catch (_error) {
        return res.status(404).json({ message: 'Not Found' });
    }
});
const addNewCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const addedCar = yield cars_sevice_1.default.addNewCar(body);
    return res.status(201).json(addedCar);
});
module.exports = {
    listAllCars,
    addNewCar,
};
