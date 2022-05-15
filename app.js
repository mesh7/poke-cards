console.log("Poke-Cards");
const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const button = document.getElementById("button");

let getPokemonData = () => {
  let randomNumber = Math.floor((Math.random() * 150) + 1);
  console.log(randomNumber);
  fetch(url).then( (response) => {
      console.log(response.json())
  })
};

button.addEventListener("click", getPokemonData);