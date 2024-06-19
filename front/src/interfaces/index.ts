interface IButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>; //()=>void
  disabled?: boolean;
  className?: string;
}

export type {IButtonProps};
