const usuario = {
    id: 1,
    nombre: 'Jon',
    apellido: 'Gibaut',
    edad: 19,
};
//destructuring: nos permite darle un valor a cada variable del objeto o a cada posicion del array y nos ahorra anteponer el nombre del objeto(usuario.edad --> edad) o la posciond e un array (frutas[0] --> fruta1).
//en destructuring de objetos cuando llamo las variables se tienen que llamar igual que en el objeto con : le cambio el nombre (id : idUsuario) y  con = le doy un valor default (edad = 20).
const {id: idUsuario, nombre: nombreUsuario, apellido, edad = 20} = usuario;// al hacer el destructuring nos ahorramos anteponer el nombre del objeto en vez de poner usuario.nombre declaro a nombre como varable y ahora lo puedo poner directamente como nombre.
console.log(`El nombre del usuario es: ${nombreUsuario}, ${apellido}, ${edad}`);
// ''(comillas simples) ""(comillas dobles) ``(template string ${})

const frutas = ['Frutilla', 'Durazno', 'Manzana'];

const [fruta1, fruta2, fruta3] = frutas;// en arrays el destructuring funciona por posicicion nos ahorramos poner los [posicion].

console.log(fruta1);

const result = [
    {
        id: 10,
        nombre: 'Pepito'
    }
]

const [persona] = result;
console.log(persona);
console.log(result);

const get = (url = 'https://rickandmortyapi.com/api/character') => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data)) //then es por si todo sale bien
    .catch(e => console.error(e))
    .catch(e => console.error(e)); //catch por si hay un error
    //then, catch me convierte la funcion en promesa.
    //fetch = metodo nativo de js que trae la info de un servidor(API).
    
}
const getAsync = async (url = 'https://rickandmortyapi.com/api/character') => {
    try {
    const response = await fetch(url); //le digo ESPERA a JS
    const {results: personajes} = await response.json();
    console.log(personajes);
    }
    catch(e){
        console.error(e);
    }
}

window.onload = getAsync();

