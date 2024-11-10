import "./Hand.css";
import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const ROCK_SCISSOR_PAPER = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};
function Hand({ name, className = "" }) {
  const classNames = `Hand ${className}`;
  const src = ROCK_SCISSOR_PAPER[name];
  return (
    <div className={classNames}>
      <img className="Hand-icon" src={src} alt={name} />
    </div>
  );
}

export default Hand;
