import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

type CreateProductResponse = ServiceResponse<Omit<Product, 'orderId'>>;

const validateInput = ({ name, price, orderId }: ProductInputtableTypes): string | null => {
  if (!name || !price || !orderId) {
    return 'Todos os campos são obrigatórios';
  }
  return null;
};

const create = async (input: ProductInputtableTypes): Promise<CreateProductResponse> => {
  const error = validateInput(input);
  if (error) {
    return {
      status: 'INVALID_DATA',
      data: {
        message: error,
      },
    };
  }
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
