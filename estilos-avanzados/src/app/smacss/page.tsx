"use client";
import {useEffect, useState} from "react";

import "./SMACSS/modules.css";
import "./SMACSS/state.css";
import "./SMACSS/theme.css";

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

export default function Smacss() {
  const [characters, setCharacters] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const fetchCharacters = async () => {
      const charactersData = await getCharacters();
      setCharacters(charactersData);
    };

    fetchCharacters();
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className={`main-container theme-${theme}`}>
      <h1 className="title">Characters</h1>
      <input
        type="text"
        className="searchbox"
        placeholder="Search"
        onFocus={(e) => e.target.classList.add("is-active")}
        onBlur={(e) => e.target.classList.remove("is-active")}
      />
      <button className="button">Search</button>
      <ul className="character-list">
        {characters.map((character: any) => (
          <li className="character-item" key={character.id}>
            <img
              className="character-image"
              src={character.image}
              alt={character.name}
            />
            <div className="character-details">
              <h2 className="character-name ">{character.name}</h2>
              <p className="character-species">{character.species}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </main>
  );
}
