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

const findAll = async (): Promise<ServiceResponse<Product[]>> => {
  const products = await ProductModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: products.map((product) => ({
      id: product.dataValues.id,
      name: product.dataValues.name,
      price: product.dataValues.price,
      orderId: product.dataValues.orderId,
    })),
  };
};

export default {
  create,
  findAll,
};
