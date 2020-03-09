const logger = Symbol('logger');
const products = Symbol('products');

class Inventory {
  constructor(params) {
    this[logger] = params.logger;
    this[products] = [];
  }

  addProduct(product) {
    this[products].push(product);
    this[logger].info(`a product with ${product.getPrice()} price has been added`);
  }

  getTotal() {
    return this[products].reduce((accumulator, current) => accumulator + current.getPrice(), 0);
  }
}

module.exports = Inventory;
