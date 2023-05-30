import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';
import ordersMiddleware from '../middlewares/orders.middleware';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.findAll);

ordersRouter.post(
  '/',
  authMiddleware.verify,
  ordersMiddleware.validateInput,
  ordersController.create,
);

export default ordersRouter;
