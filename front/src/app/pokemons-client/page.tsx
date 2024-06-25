"use client";

import {PokemonContext} from "@/context/pokemon";
import {IPokemon} from "@/interfaces";
import {useContext, useEffect, useState} from "react";

function PokemonPage() {
  const {pokemons} = useContext(PokemonContext);
  // const [pokemons, setPokemons] = useState([]);

  // useEffect(() => {
  //   const getPokemons = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://pokeapi.co/api/v2/pokemon?limit=10"
  //       );
  //       const data = await response.json();
  //       setPokemons(data.results);
  //     } catch (error) {
  //       console.error("Error fetching pokemons", error);
  //       return [];
  //     }
  //   };
  //   getPokemons();
  // }, []);

  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons.length < 0 ? (
        <h1>...loading</h1>
      ) : (
        <ul>
          {pokemons.map((pokemon: IPokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PokemonPage;
