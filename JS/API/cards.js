const get = async(url = 'https://rickandmortyapi.com/api/character/') => {
    try {
        const response = await fetch(url);
        const {results : personajes} = await response.json();
        return personajes;
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
    <img src="${personaje.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
      <p class="card-text">Especie : ${personaje.species}</p>
      <p class="card-text">Planeta de origen : ${personaje.location.name}</p>
    </div>
  </div>
  </div>`;
  document.getElementById('row').innerHTML = ''; // me setea todo lo de adentro del div con id row en '' (borra las cards que le agregamos antes).
  document.getElementById('row').insertAdjacentHTML('beforeend', card);
  console.log(personaje);
}

const start = async () => {
    const personajes = await get();
    personajes.map((personaje) => {
        const card = `
        <div class = "col-4 mt-4">
        <div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">Especie : ${personaje.species}</p>
          <p class="card-text">Planeta de origen : ${personaje.location.name}</p>
        </div>
      </div>
      </div>`;
      document.getElementById('row').insertAdjacentHTML('beforeend', card);
    });
    const vivos = personajes.filter((personaje) => personaje.status === "Alive");
    console.log(vivos);
    const humanos = personajes.filter((personaje) => personaje.species === "Human");
    console.log(humanos);
    // filter me hace un array nuevo con todos los valores que cumplan la condicion dada

}
// Mostrar todos los personajes vivos en un console.log y mostrar todos los personajes con species = Human en un console.log
window.onload = start();