interface IButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>; //()=>void
  disabled?: boolean;
  className?: string;
}

interface IPokemon {
  name: string;
  url: string;
}

interface IEvent {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  notify: boolean;
}

interface IPokemonContext {
  pokemons: IPokemon[];
}

interface IEventsProps {
  events: IEvent[];
}

export type {IButtonProps, IEvent, IEventsProps, IPokemon, IPokemonContext};
