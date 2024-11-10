import "./Box.css";

function Box({ className = "" }) {
  const classNames = `Box ${className}`;
  return (
    <div className={className}>
      <div class="Box-inner">
        <div class="App-hands">
          {/* <Hand /> */}
          <div class="App-versus">VS</div>
          {/* <Hand /> */}
        </div>
      </div>
      <div class="App-bet">
        <span>배점</span>
        <input type="number" min="1" max="9" step="1" value="1" />
        <span>배</span>
      </div>
      <div class="App-history">
        <h2>승부기록</h2>
        <p></p>
        {/* <p>{hist.join(",")}</p> */}
      </div>
    </div>
  );
}
export default Box;
