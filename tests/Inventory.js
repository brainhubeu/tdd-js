const { expect } = require('chai');

const Inventory = require('../Inventory');

describe('Inventory', () => {
  describe('#getTotal', () => {
    it('returns 0 for no products', () => {
      const inventory = new Inventory();

      const result = inventory.getTotal();

      expect(result).to.equal(0);
    });

    it('returns total for one product', () => {
      const inventory = new Inventory();
      inventory.addProduct({ getPrice: () => 500 });

      const result = inventory.getTotal();

      expect(result).to.equal(500);
    });

    it('returns total for two products', () => {
      const inventory = new Inventory();
      inventory.addProduct({ getPrice: () => 500 });
      inventory.addProduct({ getPrice: () => 20 });

      const result = inventory.getTotal();

      expect(result).to.equal(520);
    });

    it('returns total for three products', () => {
      const inventory = new Inventory();
      inventory.addProduct({ getPrice: () => 500 });
      inventory.addProduct({ getPrice: () => 20 });
      inventory.addProduct({ getPrice: () => 7 });

      const result = inventory.getTotal();

      expect(result).to.equal(527);
    });
  });
});
