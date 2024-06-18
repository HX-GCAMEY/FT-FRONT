import {useContext} from "react";
import "./App.css";
import Cards from "./Cards";
import {CharacterContext} from "./context/character.context";

const App: React.FC = (): React.ReactElement => {
  const characters = useContext(CharacterContext);

  return (
    <>
      <Cards characters={characters} />
    </>
  );
};

export default App;
