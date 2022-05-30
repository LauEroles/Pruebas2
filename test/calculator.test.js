const calculator = require('../src/calculator');


describe('calculator spec', () => { 

    it('should sum two values', () => {
        const result = calculator.sum(2,3);
        expect(result).toBe(5);
    });

});