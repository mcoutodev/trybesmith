import { Request, Response } from 'express';
import productService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { data, status } = await productService.create(req.body);
  if (status !== 'CREATED') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(201).json(data);
};

const findAll = async (_req: Request, res: Response): Promise<Response> => {
  const { data, status } = await productService.findAll();
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json({ message: 'Erro ao buscar produtos' });
  }
  return res.status(200).json(data);
};

export default {
  create,
  findAll,
};
