console.log("Poke-Cards");
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const card = document.getElementById("card");
const button = document.getElementById("button");

let getPokemonData = () => {
  let randomNumber = Math.floor(Math.random() * 150 + 1);
  console.log(randomNumber);
  fetch(url)
    .then((response) => {
      if (response.ok) {
        response.json();
        console.log("Successful", response);
      } else {
        console.log("Not successful");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
};

button.addEventListener("click", getPokemonData );
