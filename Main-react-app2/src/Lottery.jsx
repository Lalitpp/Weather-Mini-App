import { useState } from "react";
import { genTicket,sum } from "./Helper";
import Ticket from "./Ticket";
export default function Lottery({n,winCondition}){
  let [ticket,setTicket]=useState(genTicket(n));
  let isWinning= winCondition(ticket);

  let buyTicket=()=>{
    setTicket(genTicket(n));
  }
  return(
    <div>
    <h1>Lottery Game</h1>
    <Ticket ticket={ticket}/>
    <br></br>
    <button onClick={buyTicket}>Buy new Ticket</button>
    <h3>{isWinning && "Congratulations,you won!"}</h3>
    </div>
  );
}