var miArray = [2, 4, 6, 8, 10, 2, 4, 5, 3, 10];
var aux = 0;

let ocurrencias = (miArray, num) => {
    
    miArray.forEach(function (valor, indice, array) {
        if (valor === num) {
            aux += 1;
        }
    });
    console.log(aux)
    aux= 0;
}