import React, { useState } from "react";
import "./App.css"; // correct path and syntax

function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function menus() {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="Box">
      <p>{count}</p>
      <div className="boxses">
        <button className="add" onClick={add}>Increment</button>
        <button className="menus" onClick={menus}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
