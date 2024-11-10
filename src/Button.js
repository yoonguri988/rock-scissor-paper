import "./Button.css";
import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const ROCK_SCISSOR_PAPER = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function Button({ name }) {
  const src = ROCK_SCISSOR_PAPER[name];
  return (
    <button class="HandButton">
      <img class="HandButton-icon" src={src} alt={name} />
    </button>
  );
}

export default Button;
