// instalar extension ESLint
/*
Tipos de variables (en general):
    -String (cadena de caracteres ex: "Messi")
    -Int (numero entero ex: 10)
    -Float (numero con decimales ex: 5.4)
    -Bool (variable de dos estados true (1) or false (0))
    -Date (fechas ex: 1/1/2021)
    -DateTime (fechas con hora ex: 1/1/2021 10:00:00)

Variables en JS:
    -const (constante) es un dato que no va a cambiar en el tiempo.
    -let un dato que puede cambiar en el tiempo.
    -var variable global al proyecto (const la dejo obsoleta).

Formas recomendadas de escribir variables:
    -camelCase la primera letra de la primera palabra con minuscula y la de la segunda en adelante con mayuscula (ex: nombreCompleto).
    -con_guiones las palabaras las separa un guion bajo (_) nunca un guion (-) (ex: nombre_completo).

Tipos de objetos en JS:
    -array [].
    -objeto {}.
    -JSON (array de objetos) [{}].
*/
document.write("<h1 style= color:tomato; >Hola mundo :D</h1>");
//document hace referencia al html linkeado .write escribe en el.
console.log("Hola mundo de la consola :D");
//console hace referencia a la consola .log me manda un mensaje por la consola.
const edad = 10;
// if (condicion a cumplir) compara datos y todo lo que esta adentro de el (adentro de las llaves) es lo que se va a ejecutar cuando se cumple la condicion.  
// >= (mayor o igual a) > (mayor a) < (menor a) <= (menor o igual a) == (igual de comparacion del dato porque tener un solo igual es de asignacion edad = 10 (le asigno a edad el valor 10)) === (equivalente a me verifica que tenga el mismo valor y que sea el mismo tipo de variable)
if(edad >= 18) {
    console.log("es mayor de edad");
}
// si no se cumple el if paso al else
else{
    console.log("no es mayor de edad");
}
// && == y(and) (en ingles shift + 7 en español shift + 6) || == o(or) (en ingles shift + la tecla de abajo del borrar (<--) en español la tecla a la izquierda del 1)
if(edad >= 18 && edad < 25){
    console.log("la edad esta entre 18 y 24");
}
else{
    if(edad >= 30 && edad < 50){
        console.log("la edad esta entre 30 y 49");
    }
    else{
        console.log("la edad es menor a 18 esta entre 25 y 29 o es mayor a 49");
    }
}
const nombre = "Messi";
if(nombre == "Messi" || nombre == "Leo Messi"){
    console.log("Hola messi 😃");
}
else{
    console.log("no sos messi 😟");
}

const lenguajes = ["JavaScript", "Python", "Java", "C++"];
//todos los arrays empiezan en la posicion 0 en este arrya seria 0 = JavaScript 1 = Python 2 = Java 3 = C++.
console.log(lenguajes.length);
console.log(lenguajes[3]);
//con los corchetes al lado del nombre marco la posicion que quiero utilizar
//array.length = longitud del array

//loops para recorrer el array. Inicializo variable llamada i en 0 porque la primera poscion del array es 0
/*
For:
    -incializo i en 0.
    -i < array.length: todo lo que esta adentro del loop se va a ir repitiendo mientras que i sea menor a array.length.
    -i++ : cada vez que termina el loop se suma un valor a i (i++ es lo mismo que decir i = i+1)
    for(let i = 0; i < lenguajes.length; i++){
        console.log(lenguajes[i]);
    }

----------------------------------------------------------------

While:
    -incializo i en 0 aparte del loop.
    let i = 0;
    while(i<lenguajes.length){
        console.log(lenguajes[i]);

        i++;
    }

----------------------------------------------------------------

Do While:
    let i = 0;
    do{
        console.log(lenguajes[i]);
        i++;
    }
    while(i< lenguajes.length)

*/

lenguajes.push("C#", "C", "Ruby");
//array.push(dato) me agrega un dato nuevo al final del array.
console.log(lenguajes.length);
console.log(lenguajes);
for(let i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
}

//Consigna: hacer un array de enteros y que cada vez que el entero sea mayor a 30 agregar un 100 al final del array.

let array = [10, 100, 30, 31, 40, 7, 22, 35];
const longitudInicial = array.length;

for(let i = 0; i < longitudInicial; i++){
    if(array[i] > 30){
        array.push(100);       
    }
    console.log(longitudInicial);
    console.log(array.length);
}
console.log(array);



