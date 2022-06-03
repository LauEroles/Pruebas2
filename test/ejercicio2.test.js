const ejercicio2= require('../src/ejercicio2');

describe('Calcular area de un triangulo', ()=> {
    it ('Calculates the area of the triangle', ()=>{
        const result=ejercicio2.areaTriangulo(4,4);
        expect(result).toBe(8);
    })
});
