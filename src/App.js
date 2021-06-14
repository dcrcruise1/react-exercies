import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h5>Count is {count}</h5>
        <button onClick={increaseCounter}>increaseCounter</button>
      </header>
    </div>
  );
}

export default App;
