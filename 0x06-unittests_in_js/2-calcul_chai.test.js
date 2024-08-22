const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should return 4 when inputs are 1 and 3 and type is SUM', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when inputs are 1 and 3.7 and type is SUM', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5 when inputs are 1.2 and 3.7 and type is SUM', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 when inputs are 1.5 and 3.5 and type is SUM' , () => {
        expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    });

    it('should return -2 when inputs are -1.4 and -0.6 and type is SUM', () => {
        expect(calculateNumber('SUM', -1.4, -0.6)).to.equal(-2);
    });

    it('should return -4 when inputs are 1.4 and 4.5 and type is SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT',1.4, 4.5)).to.equal(-4);
    });

    it('should return 0.2 when inputs are 1.4 and 4.5 and type is DIVIDE', () => {
        expect(calculateNumber('DIVIDE',1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when inputs are 1.4 and 0 and type is DIVIDE', () => {
        expect(calculateNumber('DIVIDE',1.4, 0)).to.equal('Error');
    });


});
