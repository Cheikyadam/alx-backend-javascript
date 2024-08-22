const sendPaym = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const assert = require('assert');

const spy = sinon.spy(console, 'log');
const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

describe('sendPaymentRequestToApi', () => {

  after(function () {
    spy.restore();
    stub.restore()
  });

  Utils.calculateNumber('SUM', 100, 20);
  sendPaym(100, 20);

  it('should return true', () => {
    assert.strictEqual(stub.called, true);
  });
  it('spy.callCount should return 2', () => {
    assert.strictEqual(stub.callCount, 2);
  });
  const values = stub.returnValues;
  it('the two values returned must be the same', () => {
    assert.strictEqual(values[0], values[1]);
  });
  
  it('should return 10', () => {
    assert.strictEqual(values[0], 10)
  });
 
  it('should be called with SUM, 100, 20 as args', () => {
    assert.deepEqual(stub.getCall(0).args, ['SUM', 100, 20]);
  });

  it('should log The total is: 10', () => {
    assert.equal(spy.getCall(0).args[0], 'The total is: 10');
  });

});
