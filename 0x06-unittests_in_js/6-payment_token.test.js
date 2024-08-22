assert = require('assert');
getPaym = require('./6-payment_token');


describe('getPaymentTokenFromAPI', function () {
 it('should return {"data" : success......}', function (done) {
   getPaym(true).then(response => { 
     try {
	 assert.deepEqual(response, { data: 'Successful response from the API' });
	 done();
     } 
     catch(error) {
	done(error);
     }

   });
 });
});
