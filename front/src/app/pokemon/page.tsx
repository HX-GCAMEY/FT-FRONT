import {IPokemon} from "@/interfaces";
import Link from "next/link";

async function fetchPokemons() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();
    return data.results;
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
        {pokemons.map((pokemon: IPokemon) => {
          const id = pokemon.url.split("/")[6];

          return (
            <li key={pokemon.name}>
              <Link href={`/pokemon/${id}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonPage;
