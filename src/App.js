import { useState } from "react";
import "./App.css";
import resetSrc from "./assets/ic-reset.svg";
import Score from "./Score";
import Button from "./Button";
import Box from "./Box";
import { compareHand, generateRandomHand } from "./utils";
import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const INITIAL_VALUE = "rock";

function getResult(me, your) {
  const comparison = compareHand(me, your);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [yourHand, setYourHand] = useState(INITIAL_VALUE);
  const [hist, setHist] = useState([]);

  const [myScore, setMyScore] = useState(0);
  const [yourScore, setYourScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextYourHand = generateRandomHand();
    const nextHist = getResult(nextHand, nextYourHand);
    const comparison = compareHand(nextHand, nextYourHand);
    setHand(nextHand);
    setYourHand(nextYourHand);
    setHist([...hist, nextHist]);

    if (comparison > 0) setMyScore(myScore + bet);
    if (comparison < 0) setYourScore(yourScore + bet);
  };
  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setYourHand(INITIAL_VALUE);
    setHist([]);

    setMyScore(0);
    setYourScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10; // 1과 9 사이의 숫자로 만들어 줌
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <Button onClick={handleClearClick}>
        <img className="App-reset" src={resetSrc} alt="초기화" />
      </Button>
      <div className="App-scores">
        <Score num={myScore} name="나" />
        <div className="App-versus">:</div>
        <Score num={yourScore} name="상대" />
      </div>
      <Box
        className="App-box"
        hand={hand}
        yourHand={yourHand}
        hist={hist}
        onChange={handleBetChange}
        bet={bet}
      />
      <Button value="rock" onClick={handleButtonClick} />
      <Button value="scissor" onClick={handleButtonClick} />
      <Button value="paper" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
