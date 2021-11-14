import React, { useState } from "react";
import "./index.css";

function App() {
  const [counter, setcounter] = useState(0);

  return (
    <div className="container">
      <div>
        <h3>Regular Counter</h3>
        <h2>{counter}</h2>
        <button
          type="button"
          className="btn"
          onClick={() => setcounter(counter + 1)}
        >
          increase
        </button>
        <button type="button" className="btn" onClick={() => setcounter(0)}>
          reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setcounter(counter - 1)}
        >
          decrease
        </button>
      </div>
    </div>
  );
}

export default App;
