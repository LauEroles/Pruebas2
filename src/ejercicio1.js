// requerimiento 
// calculo de el area de un circulo que reciba el radio
//Área = radio X radio X 3,14


console.log ("ejercicio 1");

const phi=3.14;

function areaCirculo(y){
    let resultado= ((y*y)*phi);
    return  resultado;
    
}

module.exports={
    areaCirculo
}
