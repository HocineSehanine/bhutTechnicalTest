import { Request, Response } from 'express';
import logsModel from '../models/logs.model';

export default class carsController {
  static async listlogs(_req: Request, res: Response) {
    const logs = await logsModel.find();

    res.status(200).json(logs);
  }
}
