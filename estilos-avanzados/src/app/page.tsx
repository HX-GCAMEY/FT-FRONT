"use client";

import {useEffect, useState} from "react";
import "./OOCSS.css";

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

export default function Home() {
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
      <h1 className="title">Characters</h1>
      <ul className="character-list">
        {characters.map((character: any) => (
          <li className="character-item" key={character.id}>
            <img
              className="character-image"
              src={character.image}
              alt={character.name}
            />
            <div className="character-details">
              <h2 className="character-name">{character.name}</h2>
              <p className="character-species">{character.species}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
