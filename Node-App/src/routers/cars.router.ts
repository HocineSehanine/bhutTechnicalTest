import { Router } from 'express';
import carsController from '../controllers/cars.controller';

const routes = Router();

routes.get('/listCars', carsController.listAllCars);
routes.post('/createCar', carsController.addNewCar);

export default routes;
