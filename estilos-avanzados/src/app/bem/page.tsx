"use client";
import {useEffect, useState} from "react";
import "./BEM.css";

const getCharacters = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export default function Bem() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersData = await getCharacters();
      setCharacters(charactersData);
    };

    fetchCharacters();
  }, []);

  return (
    <main className="main-container">
      <h1 className="main-container__title">Characters</h1>

      <ul className="character-list">
        {characters.map((character: any) => (
          <li className="character-item" key={character.id}>
            <img
              className="character-item__image"
              src={character.image}
              alt={character.name}
            />
            <div className="character-item__details">
              <h2 className="character-item__name ">{character.name}</h2>
              <p className="character-item__species">{character.species}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
