import "./styles.css";
import { useState, useEffect } from "react";

const Counter: React.FC = () => {
  
  const [counter, setCounter] = useState(0);

  // console.log("Re-render New Value is", counter);
  useEffect(() => {
    console.log("Counter Mounted")

    return function () {
      console.log("Unmount Counter")
    }
  }, [])

  // Empty Dep Array means --> Whole Component
  // If dep has some values

  useEffect(() => {
    console.log("User updated count")
  }, [counter])

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
