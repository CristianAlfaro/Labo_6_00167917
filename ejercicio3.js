var miArray = [2, 4, 6, 8, 10, 2, 4, 5, 3, 10, "hola", "como", "estas", false, true];

let tiposDatos = (miArray) => {
    let listaux = [];
    let aux = "";
    miArray.forEach(function (valor, array) {
        console.log(valor + "->" + typeof (valor))
        listaux.push(typeof (valor));

    });

    listaux.forEach(function (array) {
        console.log(listaux)
        aux = listaux.shift();
        console.log(aux)
        let cuantos = 1;
        listaux.forEach(function (valor, array) {
            if (valor == aux) {
                cuantos += 1;
                a = listaux.splice(listaux.indexOf(aux), 1);
                console.log("indice eliminado " + listaux.indexOf(aux)+"              "+a);
                console.log(listaux);
                console.log("repeticiones " + cuantos);
            }
        });
        console.log("DEL TIPO " + aux + "  SE BORRARON: " +cuantos)
    });

    console.log(listaux)
    console.log(aux);
}