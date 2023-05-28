import { Request, Response } from 'express';
import productService from '../services/products.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { data, status } = await productService.create(req.body);
  if (status === 'INVALID DATA') return res.status(400).json(data);
  return res.status(201).json(data);
};

const findAll = async (_req: Request, res: Response): Promise<Response> => {
  const { data } = await productService.findAll();
  return res.status(200).json(data);
};

export default {
  create,
  findAll,
};
