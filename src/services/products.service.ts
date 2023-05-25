import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

type CreateProductInput = Omit<Product, 'id'>;
type CreateProductResponse = ServiceResponse<Omit<Product, 'orderId'>>;

const create = async (input: CreateProductInput): Promise<CreateProductResponse> => {
  const newProduct = await ProductModel.create(input);
  return {
    status: 'CREATED',
    data: {
      id: newProduct.dataValues.id,
      name: newProduct.dataValues.name,
      price: newProduct.dataValues.price,
    },
  };
};

export default {
  create,
};
