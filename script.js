
// Obtener los elementos del DOM
const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const wEight = document.getElementById("weight");
const heigHt = document.getElementById("height");
const tyPes = document.getElementById("types");
const poKeHd = document.getElementById("hp");
const pokeATack = document.getElementById("attack");
const pokeDEF = document.getElementById("defense");
const pokeSAta = document.getElementById("special-attack");
const pokeSDef = document.getElementById("special-defense");
const pokeSPeed = document.getElementById("speed"); 
const pContainer = document.getElementById('pokeContainer');
const spriteC = document.getElementById("sprite-container");
const getPokemon = async () => {
  try {
    const pokeNameId = userInput.value.toLowerCase()
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokeNameId}`);
    const data = await res.json();
    setPokemonInfo(data);
  } catch (err) {
    alert("Pokémon not found")
    console.log(err)
  }
};

const setPokemonInfo = data => {
  const { name, id, weight, height, types, sprites, stats } = data ;

  pokeName.textContent = `${name[0].toUpperCase() + name.slice(1)}`

pokeId.textContent = `ID${id}`;
wEight.textContent = `W ${weight}`; 
heigHt.textContent = `H ${height}`;


spriteC.innerHTML = `regular <img id="sprite" src="${sprites.front_default}">
  shiny <img id="sprite"  src="${sprites.front_shiny}" >`

    poKeHd.textContent = data.stats[0].base_stat;
    pokeATack.textContent = data.stats[1].base_stat;
    pokeDEF.textContent = data.stats[2].base_stat;
    pokeSAta.textContent = data.stats[3].base_stat;
    pokeSDef.textContent = data.stats[4].base_stat;
    pokeSPeed.textContent = data.stats[5].base_stat;
};

searchBtn.addEventListener('click', e => {
  e.preventDefault();
  getPokemon()
})

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    searchBtn.click();
  } 
})