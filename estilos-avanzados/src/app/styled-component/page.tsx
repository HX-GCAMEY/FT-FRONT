"use client";
import {
  CardContainer,
  WizardName,
  Button,
  CharacterImage,
  SecondButton,
} from "./card.styles";

// import {myTheme} from "../../helpers/theme";
import {Theme, THEMES} from "@/helpers/themes";
import {useState} from "react";

function Card() {
  const [currentTheme, setCurrentTheme] = useState(THEMES.light);
  const personaje = {name: "Harry Potter", house: "Griffindor"};

  const {name, house} = personaje;

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === THEMES.light ? THEMES.dark : THEMES.light);
  };

  return (
    <Theme theme={currentTheme}>
      <button onClick={toggleTheme}>Cambiar Tema</button>
      <CardContainer>
        <CharacterImage
          src="https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg"
          alt="Harry Potter"
        />
        <WizardName>{name}</WizardName>
        <p>{house}</p>
        <Button>Clickeame</Button>
        <SecondButton>Segundo Botón</SecondButton>
      </CardContainer>
    </Theme>
  );
}

export default Card;
