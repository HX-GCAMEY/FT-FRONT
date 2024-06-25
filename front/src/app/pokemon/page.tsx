import {IPokemon} from "@/interfaces";
import Link from "next/link";
import {fetchPokemons} from "@/lib/server/fetchPokemons";

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
