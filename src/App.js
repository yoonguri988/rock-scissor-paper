import "./App.css";
import resetSrc from "./assets/ic-reset.svg";

function App() {
  return (
    <div className="App">
      <h1 class="App-heading">가위바위보</h1>
      <img class="App-reset" src={resetSrc} alt="초기화" />
      <div class="App-scores">
        {/* <Score /> */}
        {/* <Score /> */}
      </div>
      {/* <Box />
      <Button />
      <Button />
      <Button /> */}
    </div>
  );
}

export default App;
