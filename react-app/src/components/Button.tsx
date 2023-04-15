interface ButtonProps {
  children: String;
  color: String;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className={"btn btn-" + props.color}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
