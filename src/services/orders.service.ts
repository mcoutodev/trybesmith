import { Op } from 'sequelize';
import db from '../database/models';
import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

type FindAllOrdersResponse = Promise<ServiceResponse<{
  id: number;
  userId: number;
  productIds?: number[];
}[]>>;

const findAll = async (): FindAllOrdersResponse => {
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

type CreateOrderInput = {
  userId: number;
  productIds: number[];
};

type CreateOrderResponse = Promise<ServiceResponse<CreateOrderInput>>;

const create = async ({ userId, productIds }: CreateOrderInput): CreateOrderResponse => {
  await db.transaction(async (transaction) => {
    const newOrder = await OrderModel.create({ userId }, { transaction });
    await ProductModel.update({ orderId: newOrder.dataValues.id }, {
      where: { id: { [Op.in]: productIds } },
      transaction,
    });
  });
  return {
    status: 'CREATED',
    data: { userId, productIds },
  };
};

export default {
  findAll,
  create,
};
