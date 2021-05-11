/* 1. Hacer una funcion que dado un array de parametro, devuelva un array con los numeros al cuadrado mas 1

2. Hacer una funcion que dada un array de parametro, devuelva un array con los numeros superiores al promedio. */
//1
//find y empezar a pegarle a la API
//funcion flecha es lo mismo que decir: function uno() {}

const uno = () => {
 const numeros = [1, 10, 5, 3, 4];
 //const cuadrado = nuevo(numeros);
 const cuadrado = numeros.map(numero => (numero * numero) + 1); // .map me crea un nuevo array con el valor que le paso en el return (si no pongo llaves y hago todo en una misma linea esa linea va a ser toamda con el return)
 console.log(cuadrado);
}
// const nuevo = (array) => {
//     let nuevoArr = [];
//     array.forEach(item => {
//         nuevoArr.push((item * item) + 1);
//     });
//     return nuevoArr;
// }

//2

const dos = () => {
    const numeros2 = [11, 6, 4, 10, 7, 15];
    const average = promedio(numeros2);
    console.log(average);
    //const numerosFiltrados = filtrado(numeros2, prom);
    const numerosFiltrados = numeros2.filter(numero => numero > average); // .filter me hace un array nuevo con todos los valores que cumplan con la condicion dada (numero > prom).
    console.log(numerosFiltrados);
}
const promedio = (array) => {
    let acumulador = 0;
    array.forEach(item => {
        acumulador += item; // es lo mismo que decir acumulador = acumulador + item.
    });
    const prom = (acumulador/array.length);
    return prom;
}
// const filtrado = (array, prom) => {
//     let arrayNuevo = [];
//     array.forEach(item => {
//         if(item > prom){
//             arrayNuevo.push(item);
//         }
//     });
//     return arrayNuevo;
// }





/**
 * 3. El siguiente array contiene alturas de montañas de una cordillera
 *
 * alturas = [4, 6, 8, 1, 3, 8, 2, 8, 4, 3, 5, 2]
 *
 * Hacer una función que encuentre el pico más alto y una que encunetre el más bajo.
 * (El array lo pueden inventar ustedes)
 */
 
 /**
  * 4. Dado un array a y b:
  * a = [4, 5, 6, 1]
  * b = [8, 1, 0, 4]
  *
  * Hacer una función que construya un array que contenga la suma de los dos arrays.
  *
  * La respuesta tiene que ser:
  * res = [12, 6, 6, 5]
  */

 //3
 // si declaro una veriable en una funcion me qeuda restringida a ella y si la declaro fuera es global a mi js
 function tres() {
    const alturas = [4, 6, 8, 1, 3, 8, 2, 10, 4, 3, 5, 2];
    buscador(alturas);
 }

 function buscador(array) {
     let min = array[0];
     let max = array[0];
    /*for(let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        else{
            if(array[i] < min) {
                min = array[i];
            }
        }
    }
    */
    array.forEach(item => {
        if (item > max) {
            max = item;
        }
        else{
            if(item < min) {
                min = item;
            }
        }
    });
    console.log("el maximo es: ", max,", y el minimo es: ", min);
 }


 //4
 function cuatro() {
    const a = [4, 5, 6, 1];
    const b = [8, 1, 0, 4];
    const c = sumaArr(a, b); //creo una constante que tiene el valor del return de la funcion
    console.log(c);
 }
 
 function sumaArr(array1, array2){
     let array3 = [];
     for (let i = 0; i < array1.length; i++){
         array3.push(array1[i]+array2[i]);
     }
     /*
     let indice = 0;
     array1.forEach(item => {
        array3.push(item + array2[indice]);
        indice++;
     })
     */
     return array3; //me devuelve array3
 }
 
 
 //5 encontrar el usuario por el id que recibo por html.
 const buscarPorId = () => {
     const usuarios = [
        {
            id:1,
            nombre: "Jon"
        },
        {
            id:2,
            nombre: "Messi"
        }
    ]
    const user_id = parseInt(document.getElementById("_id").value);
    //const usuario = encontrar(usuarios, user_id);
    const usuario = usuarios.find(item => item.id === user_id); //me encuentra una variable en mi array que cumpla con la condicion dada y se la asigna a una variable nueva en este caso usuario.
    console.log(usuario);
 }
//  const encontrar = (array, id) => {
//     let user;
//     array.forEach(item => {
//         if(item.id === id){
//             user = {
//                 id: item.id,
//                 nombre: item.nombre
//             }
//             break;
//         }
//     });
//     return user;
//  }



 
 window.onload = dos(); //me ejecuta una funcion cuando se carga la pagina