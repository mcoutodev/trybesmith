import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const secret = JWT_SECRET ?? 'secret';

type TokenPayload = {
  id: number;
  username: string;
};

const sign = (payload: TokenPayload): string => jwt.sign(payload, secret);

const verify = (token: string): TokenPayload => jwt.verify(token, secret) as TokenPayload;

export default {
  sign,
  verify,
};
