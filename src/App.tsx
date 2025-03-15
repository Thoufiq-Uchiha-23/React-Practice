import { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const myItems = [
  {
    id: 1,
    title: "I need to finish my hw",
  },
  {
    id: 2,
    title: "I need to watch the new episode of my favorite show",
  },
];

const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);

  return (
    <div>
      <h1>Hello from App</h1>
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
      <Todo items={myItems} />
    </div>
  );
};

export default App;
