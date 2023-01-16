import { Router } from 'express';
import logsController from '../controllers/logs.controller';

const routes = Router();
routes.get('/logs', logsController.listlogs);

export default routes;
