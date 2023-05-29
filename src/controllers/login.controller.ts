import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP.util';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { data, status } = await loginService.verifyLogin(req.body);
  if (status !== 'SUCCESSFUL') {
    return res.status(mapStatusHTTP(status)).json(data);
  }
  return res.status(200).json(data);
};

export default {
  login,
};
