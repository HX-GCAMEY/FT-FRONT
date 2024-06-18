import {ICharacter} from "./interfaces/character.interface";

function Card({name, gender}: ICharacter) {
  return (
    <div>
      <h1>Card</h1>
      <h1>{name}</h1>
      <h2>{gender}</h2>
    </div>
  );
}

export default Card;
