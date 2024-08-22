const sendPaym = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const assert = require('assert');

const spy = sinon.spy(Utils, 'calculateNumber');

describe('sendPaymentRequestToApi', () => {

  after(function () {
    spy.restore();
  });

  Utils.calculateNumber('SUM', 100, 20);
  sendPaym(100, 20);

  it('should return true', () => {
    assert.strictEqual(spy.called, true);
  });
  it('spy.callCount should return 2', () => {
    assert.strictEqual(spy.callCount, 2);
  });
  const values = spy.returnValues;
  it('the two values returned must be the same', () => {
    assert.strictEqual(values[0], values[1]);
  });
});
