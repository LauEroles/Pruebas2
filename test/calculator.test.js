const calculator = require('../src/calculator');


describe('calculator spec', () => { 

    it('should sum two values', () => {
        const result = calculator.sum(2,3);
        expect(result).toBe(5);
    });

    it('should substract two values', () =>{
        const result= calculator.substrck(8,5);
        expect(result).toBe(3);
    })
    it('should multiply', ()=>{
        const result= calculator.multiply(5,5);
        expect(result).toBe(25);
    })
    it('should divide', ()=>{
        const result= calculator.divide(10,2);
        expect(result).toBe(5);
    } )

});

