import {ICharacterProps} from "./interfaces/character.interface";
import Card from "./Card";

function Cards({characters}: ICharacterProps) {
  return (
    <div>
      {characters.map((character) => (
        <Card name={character.name} gender={character.gender} />
      ))}
    </div>
  );
}

export default Cards;
