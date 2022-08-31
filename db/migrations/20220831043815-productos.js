'use strict';
const { CategorySchema, CATEGORY_TABLE } = require('../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model');
module.exports = {
  //para crear la tabla  category
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema)
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
  },
  //Para borrar la tabla category
  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },

};
