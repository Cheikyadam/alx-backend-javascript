const sendPaym = require('./5-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const assert = require('assert');


describe('sendPaymentRequestToApi', () => {
  let spy;

  afterEach(function() {
   spy.restore();
  });

  beforeEach(function () {
    spy = sinon.spy(console, 'log');
  });


  it('should log The total is: 120 and calledOnce should return true', () => {
    sendPaym(100, 20);
    assert.equal(spy.getCall(0).args[0], 'The total is: 120');
    assert.equal(spy.calledOnce, true);
  });

   it('should log The total is: 20 and calledOnce should return true', () => {
    sendPaym(10, 10);
    assert.equal(spy.getCall(0).args[0], 'The total is: 20');
    assert.equal(spy.calledOnce, true);
  });


});
