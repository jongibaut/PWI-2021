let persona = {
    nombre: "Jon",
    apellido: "Gibaut",
    edad: 19,
    hobbies : [
        {nombre: "programar 🤓"},
        {nombre: "tocar la guitarra 🎸"}
    ]
};
console.log(persona.edad);
//JSON = [{}]
const alumnos = [
    {
        id: 1,
        nombre: "Gaston",
        edad: 31
    },
    {
        id: 2,
        nombre: 'Federico',
        edad: 25
    },
    {
        id: 3,
        nombre: `Agustin`,
        edad: 23
    },
    {
        id: 4,
        nombre: "Marcos",
        edad: 26
    }
];
let contador = 0;
let acumulador = 0;
for(let i = 0; i < alumnos.length; i++){
    console.log(alumnos[i].nombre);
    acumulador += alumnos[i].edad; //acumulador = acumulador + alumnos[i].edad;
    contador++;//contador = contador + 1;
}
console.log(acumulador, contador);

let n1 = parseInt(prompt("Ingrese un numero"));
let n2 = parseInt(prompt("Ingrese otro numero"));
// parseInt me transforma el tipo de la variable de string a entero(int)
// 10 + 10 = 20 pero "10" + "10" = "1010" cuando sumo strings se concatenan
console.log(n1+n2);

function numeros(){
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    console.log(n1, n2);
    alert(n1);
}

// las funciones las puede ejecutar desde afuera del js (een otro JS o en el HTML) o desde el mismo JS en donde estoy.
function consola(){
    console.log("hola");
}
consola();