import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';

type FindUserResponse = ServiceResponse<true | false>;
type FindUserInput = {
  username: string;
  password: string;
};

const findUser = async ({ username, password }: FindUserInput): Promise<FindUserResponse> => {
  await UserModel.findOne({ where: { username, password } });
  return {
    status: 'SUCCESSFUL',
    data: true,
  };
};

export default {
  findUser,
};
