import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      counter = 20;
    } else {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 1) {
      counter = 1;
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Score: {counter}</p>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div>
    </>
  );
}

export default App;
