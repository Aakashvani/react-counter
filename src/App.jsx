import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter,setCounter] = useState(0);

  //<-- handling add , sub, double, reset button -->
  const handleChange = (value) =>{
    setCounter(counter + value)
  }

  const resetCounter = () =>{
    setCounter(0);
  }

  const handleDouble = () =>{
    setCounter(counter * 2);
  }


  return (
    <div className="App">

      <h3 className={ counter % 2 === 0 ? "green"  : "red"}> Counter : {counter} </h3>

      {/* add button  */}
      <button onClick ={() => handleChange(1)} >increment</button>
      
      {/* sub button  */}
      <button onClick ={() => handleChange(counter > 0 ? -1 : 0)} >decrement</button>

      {/* double button  */}
      <button onClick ={handleDouble} >Double</button>

      {/* reset button  */}
      <button onClick ={resetCounter} >reset</button>

      {/* <-- div for showing wheater counter is even or odd --> */}
      <div >Number is { counter % 2 === 0 ? "Even" : "Odd" }  </div>


    </div>
  );
}
