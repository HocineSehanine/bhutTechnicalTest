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
const node_fetch_1 = __importDefault(require("node-fetch"));
const logs_model_1 = __importDefault(require("../models/logs.model"));
class carsService {
    static listAllCars() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = () => __awaiter(this, void 0, void 0, function* () {
                const request = yield (0, node_fetch_1.default)('http://api-test.bhut.com.br:3000/api/cars');
                const requestJson = yield request.json();
                return requestJson;
            });
            const carslist = yield results();
            return carslist;
        });
    }
    static addNewCar(car) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            };
            const request = yield (0, node_fetch_1.default)(`http://api-test.bhut.com.br:3000/api/cars`, options);
            const requestJson = yield request.json();
            yield carsService.createNewCarlog(car._id);
            return requestJson;
        });
    }
    static createNewCarlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id) {
                let date = new Date().toLocaleDateString('pt-BR');
                let time = new Date().toLocaleTimeString('pt-BR');
                yield logs_model_1.default.create({
                    data_hora: `Horario: ${time}, Data: ${date}`,
                    car_id: id
                });
            }
        });
    }
}
//   const results = async () => {
//     const request = await fetch('http://api-test.bhut.com.br:3000/api/cars');
//     const requestJson = await request.json();
//     return requestJson;
//   };
//   const carslist = await results();
//   return carslist;
// }
// const addNewCar = async (car: Icar) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(car)
//   }
//   const request = await fetch(`http://api-test.bhut.com.br:3000/api/cars`, options);
//   const requestJson = await request.json();
//   if(requestJson._id) {
//     let date = new Date().toLocaleDateString('pt-BR');
//     let time = new Date().toLocaleTimeString('pt-BR');
//     await logsModel.create({
//       data_hora: `Horario: ${time}, Data: ${date}`,
//       car_id: requestJson._id
//     });
//   }
//   return requestJson
// }
exports.default = carsService;
