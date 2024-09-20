import { useState ,useEffect } from "react";

export default function Count(){
  let [count,setCount]=useState(0);

  let incCount=()=>{
    setCount((currCount)=>{
      return currCount+1;
    });
  };

  useEffect(function printSomething(){
    console.log("this is a side-effect");
  });
  return(
    <div>
    <h1>Count={count}</h1>
    <button onClick={incCount}>+1</button>
    </div>
  )
}