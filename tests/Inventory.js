const sinon = require('sinon');

const { expect } = require('./setup');
const Inventory = require('../Inventory');

describe('Inventory', () => {
  describe('#getTotal', () => {
    it('returns 0 for no products', () => {
      const logger = {
        info: sinon.spy(),
      };
      const inventory = new Inventory({ logger });

      const result = inventory.getTotal();

      expect(result).to.equal(0);
      expect(logger.info).to.not.be.called();
    });

    it('returns total for one product', () => {
      const logger = {
        info: sinon.spy(),
      };
      const inventory = new Inventory({ logger });
      inventory.addProduct({ getPrice: () => 500 });

      const result = inventory.getTotal();

      expect(result).to.equal(500);
      expect(logger.info).to.be.calledOnce();
      expect(logger.info.getCall(0).args).to.deep.equal(['a product with 500 price has been added']);
    });

    it('returns total for two products', () => {
      const logger = {
        info: sinon.spy(),
      };
      const inventory = new Inventory({ logger });
      inventory.addProduct({ getPrice: () => 500 });
      inventory.addProduct({ getPrice: () => 20 });

      const result = inventory.getTotal();

      expect(result).to.equal(520);
      expect(logger.info).to.be.calledTwice();
      expect(logger.info.getCall(0).args).to.deep.equal(['a product with 500 price has been added']);
      expect(logger.info.getCall(1).args).to.deep.equal(['a product with 20 price has been added']);
    });

    it('returns total for three products', () => {
      const logger = {
        info: sinon.spy(),
      };
      const inventory = new Inventory({ logger });
      inventory.addProduct({ getPrice: () => 500 });
      inventory.addProduct({ getPrice: () => 20 });
      inventory.addProduct({ getPrice: () => 7 });

      const result = inventory.getTotal();

      expect(result).to.equal(527);
      expect(logger.info).to.be.calledThrice();
      expect(logger.info.getCall(0).args).to.deep.equal(['a product with 500 price has been added']);
      expect(logger.info.getCall(1).args).to.deep.equal(['a product with 20 price has been added']);
      expect(logger.info.getCall(2).args).to.deep.equal(['a product with 7 price has been added']);
    });
  });
});
