import './styles.css';
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  //Count of correct/incorrect
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className='countCompDiv'>
      <div className='countDiv'>{count}</div>
      <button className='decrementBtn' onClick={decrementCount}>-</button>
      <button className='incrementBtn' onClick={incrementCount}>+</button>
    </div>
  );
}