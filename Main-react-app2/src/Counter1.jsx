import { useState } from "react";

export default function Counter1(){

  let [count,setCount]=useState(0);
  console.log("page is rendered");
  console.log(`count=${count}`);
  let incCount=()=>{
    setCount((currvalue)=>{
      return currvalue+1;
    });
    setCount((currvalue)=>{
      return currvalue+1;
    });
  }
  return(
    <div>
      <p>count={count}</p>
      <button onClick={incCount}>Increase count</button>
    </div>
  )
}