const ejercicio3= require('../src/ejercicio3');

describe('Calculo de un numero por el cuadrado', ()=>{
    it ('Calcular el numero por el cuadrado', ()=>{
        const result= ejercicio3.cuadradoNumero(5);
        expect(result).toBe(25);
    
    })
});

