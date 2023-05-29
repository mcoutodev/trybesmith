import { Request, Response } from 'express';
import orderService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';

const findAll = async (_req: Request, res: Response): Promise<Response> => {
  const { data, status } = await orderService.findAll();
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json({ message: 'Unable to find orders' });
  }
  return res.status(200).json(data);
};

export default {
  findAll,
};
