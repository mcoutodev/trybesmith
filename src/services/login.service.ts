import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import jwtUtil from '../utils/jwt.util';

const verifyLogin = async ({ username, password }: Login): Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return {
      status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    };
  }
  const token = jwtUtil.sign({
    username: user.dataValues.username, id: user.dataValues.id,
  });
  return {
    status: 'SUCCESSFUL', data: { token },
  };
};

export default {
  verifyLogin,
};
