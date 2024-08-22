const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3 and type is SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7 and type is SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7 and type is SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 3.5 and type is SUM' , () => {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
    });

    it('should return -2 when inputs are -1.4 and -0.6 and type is SUM', () => {
        assert.strictEqual(calculateNumber('SUM', -1.4, -0.6), -2);
    });

    it('should return -4 when inputs are 1.4 and 4.5 and type is SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT',1.4, 4.5), -4);
    });

    it('should return 0.2 when inputs are 1.4 and 4.5 and type is DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
    });

    it('should return Error when inputs are 1.4 and 0 and type is DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE',1.4, 0), 'Error');
    });


});
