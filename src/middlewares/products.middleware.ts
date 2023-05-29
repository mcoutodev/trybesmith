import { NextFunction, Request, Response } from 'express';

const validateInput = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name, price, orderId } = req.body;
  if (!name || !price || !orderId) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  return next();
};

export default {
  validateInput,
};
