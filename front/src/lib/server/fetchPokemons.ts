export async function fetchPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching pokemons", error);
    return [];
  }
}

export async function fetchPokemon(id: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pokemon", error);
    return {};
  }
}
