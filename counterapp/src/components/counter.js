import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);//This is a react hook

  //Using prevCount, will call/store data only once when clicking the button. 
  //If we were to use count, it calls & stores information each and every time the button is clickec, slowing down the applicatioon
  
  //This function will decrease the userstate by 1
  //It is being called by the " - " button
  function decrementCount(){
    setCount((prevCount)=> prevCount -1);
  }

  //This function will increase userState by 1
  //It is being called by the " + " button
  function incrementCount(){
    setCount((prevCount) => prevCount +1);
  }
//Everything below here is calling functions from above.
return(
  <>
  <h1>Counter App</h1>
  <button onClick={decrementCount}>-</button>
  <span>{count}</span>
  <button onClick={incrementCount}>+</button>
  </>
);

}