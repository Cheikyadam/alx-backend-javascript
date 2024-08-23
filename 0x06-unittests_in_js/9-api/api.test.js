const assert = require('assert');
const request = require('request');

describe('Index page', function () {
  
  it('should have status code 200, body ....', (done) => {
	request.get('http://localhost:7865', (error, response, body) =>{
	  assert.strictEqual(response.statusCode, 200);
	  assert.equal(body, 'Welcome to the payment system');
	  done();
	});
  });

  it('should have status code 200', (done) => {
        request.get('http://localhost:7865/cart/12', (error, response, body) =>{
          assert.strictEqual(response.statusCode, 200);
          assert.equal(body, 'Payment methods for cart 12');
          done();
        });
  });

  it('should have status code 404', (done) => {
        request.get('http://localhost:7865/cart/hello', (error, response, body) =>{
          assert.strictEqual(response.statusCode, 404);
	  done();
        });
  });




});
