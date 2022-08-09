let container = document.querySelector('#container');


/*
    Obtiene los primeros 100 pokemones
*/
const getPokemons = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
     .then(response => response.json())
     .then(data => showPokemons(data.results))
}
/**
 * Lista los pokemones y paso por parametro el nombre en cada iteracion
 * @param {*} pokemons  => el array de resultados
 */
const showPokemons = (pokemons) => {
     for(const pokemon of pokemons){
        const{name}=pokemon
        getPokemon(name);
     }
}
/**
 * Obtengo un pokemon por nombre
 * @param {*} name => nombre del pokemon 
 */
const getPokemon = (name) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response=>response.json())
           .then(data => createCard(data))
}
/**
 * Creo la card con las propiedades del pokemon
 * @param {*} pokemon => recibo un pokemon como objeto literal
 */
const createCard = (pokemon) =>{
    const{name,order,sprites:{front_default}, weight}=pokemon;
    container.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${front_default}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><b>Nombre del pokemon </b>${name}</h5>
      <p class="card-text"><b>Peso del pokemon </b>${weight}.</p>
      <p class="card-text"><b>Posicion del pokemon </b>${order}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
}
getPokemons();