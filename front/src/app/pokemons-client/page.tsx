"use client";

import {PokemonContext} from "@/context/pokemon";
import {useContext} from "react";

function PokemonPage() {
  const pokemons = useContext(PokemonContext);

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
