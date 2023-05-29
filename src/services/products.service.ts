import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

type CreateProductResponse = Promise<ServiceResponse<Omit<Product, 'orderId'>>>;

const create = async (input: ProductInputtableTypes): CreateProductResponse => {
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

const findAll = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();
  return {
    status: 'SUCCESSFUL',
    data: products,
  };
};

export default {
  create,
  findAll,
};
