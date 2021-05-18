const get = async(url = 'https://pokeapi.co/api/v2/pokemon') => {
    try {
        const response = await fetch(url);
        const {results : pokemones} = await response.json();
        console.log(pokemones);
        return pokemones;
    } catch (error) {
        console.error(error);
    }
}
const single = async(url) => {
    try {
        const response = await fetch(url);
        const pokemon = await response.json();
        console.log(pokemon);
        return pokemon;
    } catch (error) {
        console.error(error);
    }
}

const buscador = async () => {
    const {value: nombre} = document.getElementById("input"); // es lo mismo que poner const nombre = document.getElementById("input").value;
    const personajes = await get();
    const personaje = personajes.find(personaje => personaje.name == nombre);
    const card = `
    <div class = "col-4 mt-4">
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
      <a class = "btn btn-primary" href="${personaje.url}">Ver mas</a>
    </div>
  </div>
  </div>`;
  document.getElementById('row').innerHTML = ''; // me setea todo lo de adentro del div con id row en '' (borra las cards que le agregamos antes).
  document.getElementById('row').insertAdjacentHTML('beforeend', card);
  console.log(personaje);
}
const buscadorId = async () => {
    const {value: id} = document.getElementById("inputId"); // es lo mismo que poner const nombre = document.getElementById("input").value;
    console.log(id);
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(url);
    const pokemon = await single(url);
    console.log(pokemon);
    const card = `
    <div class = "col-4 mt-4">
    <div class="card" style="width: 18rem;">
    <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${pokemon.forms[0].name}</h5>
    </div>
  </div>
  </div>`;
  document.getElementById('row').innerHTML = ''; // me setea todo lo de adentro del div con id row en '' (borra las cards que le agregamos antes).
  document.getElementById('row').insertAdjacentHTML('beforeend', card);
  }

const start = async () => {
    const personajes = await get();
    personajes.map((personaje) => {
        const card = `
        <div class = "col-4 mt-4">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
          <a class = "btn btn-primary" href="${personaje.url}">Ver mas</a>
        </div>
      </div>
      </div>`;
      document.getElementById('row').insertAdjacentHTML('beforeend', card);
    });
    // filter me hace un array nuevo con todos los valores que cumplan la condicion dada

}
// Mostrar todos los personajes vivos en un console.log y mostrar todos los personajes con species = Human en un console.log
window.onload = start();