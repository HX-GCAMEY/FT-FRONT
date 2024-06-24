import axios from "axios";

async function fetchPokemons() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching pokemons", error);
    return [];
  }
}

async function PokemonPage() {
  const pokemons = await fetchPokemons();
  console.log(pokemons);

  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonPage;
