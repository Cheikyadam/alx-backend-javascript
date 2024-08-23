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

});
