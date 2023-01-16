import express from 'express';
import carsRouters from './routers/cars.router';
import logsRouters from './routers/logs.router';
import ErrorHandler from './middlewares/ErrorHandler';

const app = express();
app.use(express.json());

app.use('/api', carsRouters);
app.use('/api', logsRouters);
app.use(ErrorHandler.handle);

export default app;
