import React, {createContext, useEffect, useState} from "react";

export const CharacterContext = createContext([]);

export const CharacterProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <CharacterContext.Provider value={characters}>
      {children}
    </CharacterContext.Provider>
  );
};
