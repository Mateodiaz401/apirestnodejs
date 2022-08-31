'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model');

module.exports = {
  //para crear la tabla
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
  },
  //Para borrar la tabla
  async down(queryInterface) {

    await queryInterface.dropTable(USER_TABLE);

  }
};
