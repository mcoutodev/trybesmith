import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import schema from './validations/schema';

const validateInput = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = schema.product.validate(req.body);
  if (error) {
    res.status(mapStatusHTTP(error.details[0].type)).json({ message: error.message });
    return;
  }
  return next();
};

export default {
  validateInput,
};
