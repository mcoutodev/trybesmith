import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const findAll = async (_req: Request, res: Response): Promise<Response> => {
  const { data } = await orderService.findAll();
  return res.status(200).json(data);
};

export default {
  findAll,
};
