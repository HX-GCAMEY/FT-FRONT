import Image from "next/image";

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

async function PokemonDetail({params}: {params: {id: string}}) {
  const pokemon = await fetchPokemon(params.id);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h2>{pokemon.id}</h2>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}

export default PokemonDetail;
