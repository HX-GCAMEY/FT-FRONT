import {fetchPokemons} from "../../helpers/datafetching";

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
