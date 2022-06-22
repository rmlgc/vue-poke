

export function resourceList(){
    
  const url = "https://pokeapi.co/api/v2/pokemon/language/7";
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

export async function allPokemon(){
  const url = "https://pokeapi.co/api/v2/pokemon/";
  let response = await fetch(url)
  let data = await response.json();
  const urlAllPokemon= `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${data.count}`
  return fetch(urlAllPokemon)
    .then(response => response.json())
    .then(data => data);
}

