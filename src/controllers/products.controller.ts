import { Request, Response } from 'express';
import productService from '../services/products.service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { data } = await productService.create(req.body);
  return res.status(201).json(data);
};

export default {
  create,
};
