import "./styles.css";
import { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  console.log("Re-render New Value is", counter);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <button
        onClick={handleIncrement}
        style={{ backgroundColor: "lightgreen" }}
      >
        INC
      </button>
      <button onClick={handleDecrement} style={{ backgroundColor: "tomato" }}>
        DEC
      </button>
    </div>
  );
};

export default Counter;
