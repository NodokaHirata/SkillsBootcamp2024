// This is for Practical Task 1
//  Create an empty variable to store a result
let pokemon = [];

//  Fetch a Pokemon from the API
fetch("https://pokeapi.co/api/v2/pokemon/squirtle/")
  // Parse the response as a JSON object
  .then((res) => res.json()) // res is a returned object from the API
  .then((result) => {
    // Assign the result in the variable
    pokemon = result;
    console.log("Name:", pokemon.name);
    console.log("Weight:", pokemon.weight);
    console.log("Abilities:", pokemon.abilities);
  })
  .catch((error) => {
    // Return an error in the console
    console.log("Error:", error);
  });

