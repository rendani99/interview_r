import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1> Austin learning React Interview Questions</h1>
      <h2>Start writting code Boy!</h2>
      <p> { counter } </p>
      <button onclick = { () => {
        setCounter(counter + 1);
      } } > increase_Counter </button>
    </div>
  );
}

export default App;
