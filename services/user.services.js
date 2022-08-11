const boom = require('@hapi/boom');

const getConnection = require('../libs/postgres');
const { get } = require('../routes/products.router');

class UserService {
  constructor() { }

  async create(data) {
    return data;
  }

  async find() {
    const client = await getConnection();
    const
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
