'use strict';
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');
module.exports = {
  //para crear la tabla
  async up(queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema)
  },
  //Para borrar la tabla
  async down(queryInterface) {

    await queryInterface.dropTable(CUSTOMER_TABLE);

  }
};
