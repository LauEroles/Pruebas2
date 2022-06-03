//// requerimiento 
// calculo de el area de un circulo que reciba el radio
//Área = radio X radio X 3,14

const ejercicio1 = require('../src/ejercicio1');

describe('ejercicio1 expect', () => {

    it ('Calculates the circle area', ()=> {
        const result= ejercicio1.areaCirculo(5,3.14);
        expect (result).toBe("78.5");
        })
});