import "./Hand.css";
import HandIcon from "./HandIcon";

function Hand({ value, className = "" }) {
  const classNames = `Hand ${className}`;
  return (
    <div className={classNames}>
      <HandIcon value={value} className="Hand-icon" />
    </div>
  );
}

export default Hand;
