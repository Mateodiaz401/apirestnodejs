const express = require('express');
const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const userRouter = require('./user.router');
const orderRouter = require('./orders.router');
const customersRouter = require('./customers.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1/', router);
  router.use('/products', productRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', userRouter);
  router.use('/orders', orderRouter);
  router.use('/customers', customersRouter);
}

module.exports = routerApi;
