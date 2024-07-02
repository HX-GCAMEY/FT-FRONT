"use client";
import {useEffect, useState} from "react";
import {IPokemon} from "@/interfaces";
import Link from "next/link";
import {fetchPokemons} from "@/lib/server/fetchPokemons";

export const metadata = {
  title: "Pokemons",
  description: "List of pokemons from the API pokeapi.co",
  keywords: ["Next.js", "React", "Pokemons", "API"],
};

function PokemonPage() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    fetchPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

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
