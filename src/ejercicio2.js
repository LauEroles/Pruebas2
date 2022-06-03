// requerimiento 
// calculo del area de un triangulo
//Caluclo area: base *altura/2

console.log ("ejercicio 2");

const divisor=2;

function areaTriangulo(base, altura){
    let resultado= ((base*altura)/divisor);
   return  resultado;
    
}

module.exports={
    areaTriangulo
}