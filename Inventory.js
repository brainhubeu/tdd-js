const products = Symbol('products');

class Inventory {
  constructor() {
    this[products] = [];
  }

  addProduct(product) {
    this[products].push(product);
  }

  getTotal() {
    return this[products].reduce((accumulator, current) => accumulator + current.getPrice(), 0);
  }
}

module.exports = Inventory;
