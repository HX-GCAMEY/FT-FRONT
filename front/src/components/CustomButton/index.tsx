import {IButtonProps} from "@/interfaces";

function CustomButton({text, onClick, disabled, className}: IButtonProps) {
  return (
    <div>
      <button onClick={onClick} disabled={disabled} className={className}>
        {text}
      </button>
    </div>
  );
}

export default CustomButton;
