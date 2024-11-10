import "./Box.css";
import Hand from "./Hand";

function Box({ hand, yourHand, bet, hist, className = "", onChange }) {
  const classNames = `Box ${className}`;
  return (
    <div className={classNames}>
      <div className="Box-inner">
        <div className="App-hands">
          <Hand className="" name={hand} />
          <div className="App-versus">VS</div>
          <Hand className="" name={yourHand} />
        </div>
      </div>
      <div className="App-bet">
        <span>배점</span>
        <input
          type="number"
          min={1}
          max={9}
          step={1}
          value={bet}
          onChange={onChange}
        />
        <span>배</span>
      </div>
      <div className="App-history">
        <h2>승부기록</h2>
        <p>{hist || hist.join(",")}</p>
      </div>
    </div>
  );
}
export default Box;
