import { Router } from 'express';
import loginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post('/', loginMiddleware.validateInput, loginController.login);

export default loginRouter;
