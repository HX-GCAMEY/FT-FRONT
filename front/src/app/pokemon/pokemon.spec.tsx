import {render, screen} from "@testing-library/react";
import {fetchPokemons} from "../../lib/server/fetchPokemons";
import "@testing-library/jest-dom";
import PokemonPage from "./page";

jest.mock("../../lib/server/fetchPokemons");

const pokemons = [
  {name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/"},
  {name: "Charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"},
];

beforeEach(() => {
  (fetchPokemons as jest.Mock).mockResolvedValue(pokemons);
});

describe("PokemonPage", () => {
  test("renders a list of pokemons", async () => {
    render(<PokemonPage />);
    const pokemonList = await screen.findAllByRole("listitem");
    expect(pokemonList).toHaveLength(2);
  });

  test("renders pokemon names as links", async () => {
    render(<PokemonPage />);
    const pokemonLinks = await screen.findAllByRole("link");
    expect(pokemonLinks).toHaveLength(2);
    expect(pokemonLinks[0]).toHaveTextContent("Pikachu");
    expect(pokemonLinks[1]).toHaveTextContent("Charizard");
  });

  test("links have correct href", async () => {
    render(<PokemonPage />);
    const pokemonLinks = await screen.findAllByRole("link");
    expect(pokemonLinks[0]).toHaveAttribute("href", "/pokemon/25");
    expect(pokemonLinks[1]).toHaveAttribute("href", "/pokemon/6");
  });
});
