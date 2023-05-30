import { NextFunction, Request, Response } from 'express';
import UserModel from '../database/models/user.model';
import jwtUtil from '../utils/jwt.util';

const verify = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'Token not found' });
    return;
  }
  try {
    const { username } = jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { username } });
    if (!user) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
    return;
  }
  next();
};

export default {
  verify,
};
