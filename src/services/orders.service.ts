import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

type ProductIds = {
  productIds: number[];
};
export type OrderWithProductIds = Omit<Order, 'productId'> & ProductIds;
type FindAllOrdersResponse = ServiceResponse<OrderWithProductIds[]>;

const findAll = async (): Promise<FindAllOrdersResponse> => {
  const orders = await OrderModel.findAll();
  const productIds = await ProductModel.findAll({ attributes: ['id', 'orderId'] });
  const ordersWithProductIds = orders.map((order) => ({
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds: productIds
      .filter((product) => product.dataValues.orderId === order.dataValues.id)
      .map((product) => product.dataValues.id),
  }));
  return {
    status: 'SUCCESSFUL',
    data: ordersWithProductIds,
  };
};

export default {
  findAll,
};