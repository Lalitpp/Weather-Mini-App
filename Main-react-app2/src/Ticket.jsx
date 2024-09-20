import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Ticket({ticket}){
  return(
    <div className="Ticket">
      <h1>Ticket</h1>
      {ticket.map((num,idx)=>(
        <TicketNum num={num} key={idx}/>
      )
      )}
    </div>
  );
}