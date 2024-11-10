import "./HandButton.css";
import HandIcon from "./HandIcon";

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button className="HandButton" onClick={handleClick}>
      <HandIcon value={value} className="HandButton-icon" />
    </button>
  );
}

export default HandButton;
