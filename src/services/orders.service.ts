import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

type FindAllOrdersResponse = ServiceResponse<{
  id: number;
  userId: number;
  productIds?: number[];
}[]>;

const findAll = async (): Promise<FindAllOrdersResponse> => {
  const orders = await OrderModel.findAll({
    include: [{ model: ProductModel, as: 'productIds', attributes: ['id'] }],
  });
  return {
    status: 'SUCCESSFUL',
    data: orders.map((order) => ({
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: order.dataValues.productIds?.map((product) => product.id) ?? [],
    })),
  };
};

export default {
  findAll,
};
