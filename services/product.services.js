const faker = require('faker');
const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');

class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  };

  /* sirve para generar informacion fake  y mostrara informacion existente con el isBlock*/
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  };
  async create(data) {
    const newproduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newproduct);
    return newproduct;
  };

  async find() {
    const query = 'SELECT * FROM task';
    const [data] = await sequelize.query(query);
    return data;
  };

  async findOne(id) {

    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not fount');
    }
    if (product.isBlock) {
      throw boom.clientTimeout('product is block')
    }
    return product;
  };

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not fount')
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not fount')
    }
    this.products.splice(index, 1);
    return { id }
  }

}

module.exports = ProductsServices;
