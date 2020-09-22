import React, { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total1, setTotal1] = useState(number1 + number2);
  const [total2, setTotal2] = useState(number1 * number2);
  const [total3, setTotal3] = useState(number1 + number2);
  const [total4, setTotal4] = useState(number1 + number2);

  // if(useState=number1 +number2){
  //   console.log(total1);
  // }
  // else if(useState = number1 *number2){
  //   total2;
  // }

  // function addThemTogather() {
  //   setTotal(number1 + number2);
  // }
  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          
        />
        <input
          type="number"
          placeholder="0"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>
      

      <button onClick={() =>setTotal1(number1+number2) }>Add Them!</button>
      <button onClick={()=>setTotal2(number1*number2)}>Multiply Them!</button>
      <button onClick={() => setTotal3(number1-number2)}>Subtract them!</button>
      <button onClick={() =>setTotal4(number1/number2)}>Divide them!</button>
     
 
     
    
      
    </div>
  );
}

export default App;
