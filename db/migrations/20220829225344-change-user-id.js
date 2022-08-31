'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');
const { DataTypes } = require('sequelize');
module.exports = {
  //para crear la tabla
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    })
  },
  //Para borrar la tabla
  async down(queryInterface) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
