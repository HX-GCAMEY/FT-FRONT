"use client";

import {useState, createContext, useEffect} from "react"; //redux, zustand
import axios from "axios";

export const PokemonContext = createContext({
  pokemons: [],
});

export const PokemonProvider = ({children}: {children: React.ReactNode}) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching pokemons", error);
        return [];
      }
    };
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={pokemons}>
      {children}
    </PokemonContext.Provider>
  );
};
