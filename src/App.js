import { useState } from "react";
import "./App.css";
import resetSrc from "./assets/ic-reset.svg";
import Score from "./Score";
import Button from "./Button";

function App() {
  const [myNum, setMyNum] = useState(0);
  const [yourNum, setYourNum] = useState(0);
  return (
    <div className="App">
      <h1 class="App-heading">가위바위보</h1>
      <img class="App-reset" src={resetSrc} alt="초기화" />
      <div class="App-scores">
        <Score num={myNum} name="나" />
        <div class="App-versus">:</div>
        <Score num={yourNum} name="상대" />
      </div>
      {/* <Box /> */}
      <Button name="rock" />
      <Button name="scissor" />
      <Button name="paper" />
    </div>
  );
}

export default App;
