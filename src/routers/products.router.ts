import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productsMiddleware from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter.post('/', productsMiddleware.validateInput, productsController.create);

productsRouter.get('/', productsController.findAll);

export default productsRouter;
