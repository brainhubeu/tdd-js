const dirtyChai = require('dirty-chai');
const sinonChai = require('sinon-chai');
const chai = require('chai');

chai.use(sinonChai);
chai.use(dirtyChai);

const { expect } = chai;

module.exports = {
  expect,
};
