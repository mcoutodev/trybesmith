import { NextFunction, Request, Response } from 'express';

const validateInput = (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: '"username" and "password" are required' });
    return;
  }
  return next();
};

export default {
  validateInput,
};
