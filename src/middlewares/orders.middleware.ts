import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import schema from './validations/schema';

const validateInput = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | void> => {
  if (!req.body.userId) return res.status(400).json({ message: '"userId" is required' });
  if (typeof req.body.userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  const { error } = schema.order.validate(req.body);
  if (error) {
    return res.status(mapStatusHTTP(error.details[0].type)).json({ message: error.message });
  }
  const user = await UserModel.findByPk(req.body.userId);
  if (!user) return res.status(404).json({ message: '"userId" not found' });
  next();
};

export default {
  validateInput,
};
