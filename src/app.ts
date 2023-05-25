import express from 'express';
import productController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.create);

export default app;
