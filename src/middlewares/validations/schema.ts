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

const order = Joi.object({
  userId: Joi.number().required().messages({
    'number.base': '"userId" must be a number',
  }),
  productIds: Joi.array().items(Joi.number().required().messages({
    'number.base': '"productIds" must include only numbers',
  })).required().messages({
    'array.base': '"productIds" must be an array',
    'any.required': '"productIds" is required',
  }),
});

export default {
  product,
  order,
};
