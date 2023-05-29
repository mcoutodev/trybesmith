import Joi from 'joi';

const product = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': '"name" must be a string',
    'string.min': '"name" length must be at least 3 characters long',
    'any.required': '"name" is required',
  }),
  price: Joi.string().min(3).required().messages({
    'string.base': '"price" must be a string',
    'string.min': '"price" length must be at least 3 characters long',
    'any.required': '"price" is required',
  }),
});

export default {
  product,
};
