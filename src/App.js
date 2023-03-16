import { useState } from "react";
import "./App.css";

const App = () => {
  const Display = ({ counter }) => (
    <div>
      {" "}
      Like Count <b>{counter}</b>
    </div>
  );

  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}</button>
  );

  const [counter, setCounter] = useState(0);
  const resetCount = () => setCounter(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div className="App">
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="+1" />
      <Button handleClick={decreaseByOne} text="-1" />
      <Button handleClick={resetCount} text="reset" />
    </div>
  );
};

export default App;
