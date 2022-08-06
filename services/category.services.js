const faker = require('faker');

class CategoriesServices {
  constructor() {
    this.category = [];
    this.generate();
  };

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.produ.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  };
  create(data) {
    const newcategories = {
      id: faker.category.uuid(),
      ...data
    }
    this.category.push(newcategories);
    return newcategories;
  };

  find() {
    return this.category;
  };
  findOne(id) {
    return this.category.find(item => item.id === id);
  };
  update(id, changes) {
    const index = this.category.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not find')
    }
    const product = this.category[index];
    this.category[index] = {
      ...product,
      ...changes,
    };
    return this.category[index];
  }
  delete(id) {
    const index = this.category.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not find')
    }
    this.category.splice(index, 1);
    return { id }
  }

}

module.exports = CategoriesServices;
