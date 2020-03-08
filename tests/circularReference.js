const { expect } = require('chai');

describe('show how chai handles circular references', () => {
  it('passes for equal objects where the reference is to the same object', () => {
    const first = { foo: 123 };
    first.bar = first;
    const second = { foo: 123 };
    second.bar = first;

    expect(first).to.deep.equal(second);
  });

  it('passes for equal objects where the reference is to equivalent objects', () => {
    const first = { foo: 123 };
    first.bar = first;
    const second = { foo: 123 };
    second.bar = second;

    expect(first).to.deep.equal(second);
  });

  it('fails for unequal objects by a number', () => {
    const first = { foo: 124 };
    first.bar = first;
    const second = { foo: 123 };
    second.bar = second;

    expect(first).to.not.deep.equal(second);
  });

  it('fails for unequal objects by a reference', () => {
    const first = { foo: 123 };
    first.bar = first;
    const second = { foo: 123 };
    second.bar = {};

    expect(first).to.not.deep.equal(second);
  });
});
