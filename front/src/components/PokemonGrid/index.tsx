"use client";

import {fetchPokemons} from "@/helpers/datafetching";
import {useState, useEffect} from "react";
// import {PokemonContext} from "@/context/pokemon";
// import {useContext} from "react";

function PokemonGrid() {
  // const pokemons = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    };
    fetchData();
  }, []);

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

export default PokemonGrid;
