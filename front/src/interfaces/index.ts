interface IButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>; //()=>void
  disabled?: boolean;
  className?: string;
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

interface IEventsProps {
  events: IEvent[];
}

export type {IButtonProps, IEvent, IEventsProps};
