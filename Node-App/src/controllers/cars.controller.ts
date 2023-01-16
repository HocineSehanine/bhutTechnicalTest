import { Request, Response } from 'express';
import carsSevice from '../services/cars.sevice';

export default class carsController {
  static async listAllCars(_req: Request, res: Response) {
    const carslist = await carsSevice.listAllCars();
    try {
      if (carslist) {
        return res.status(200).json(carslist);
      }
    } catch (_error) {
      return res.status(404).json({ message: 'Not Found' });
    }
  }

  static async addNewCar(req: Request, res: Response) {
    const { body } = req;
    const addedCar = await carsSevice.addNewCar(body);
    return res.status(201).json(addedCar);
  }
}
