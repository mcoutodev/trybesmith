import express from 'express';
import ordersRouter from './routers/orders.router';
import productsRouter from './routers/products.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/orders', ordersRouter);

export default app;
