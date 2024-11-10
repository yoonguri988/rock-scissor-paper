import "./Score.css";

function Score({ num, name }) {
  return (
    <div class="Score">
      <div class="Score-num">{num}</div>
      <div class="Score-name">{name}</div>
    </div>
  );
}
export default Score;
