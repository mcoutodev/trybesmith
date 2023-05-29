import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';
import schema from './validations/schema';

const validateInput = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { error } = schema.product.validate(req.body);
  if (error) {
    return res.status(mapStatusHTTP(error.details[0].type)).json({ message: error.message });
  }
  return next();
};

export default {
  validateInput,
};
