import { useState } from "react";

export default function Practice(){
  let [todos,setTodos] =useState(["lalit"]);
  let [newtodo,setNewTodo]=useState("");

  let addNewTask=()=>{
    setTodos([...todos,newtodo]);
    setNewTodo("");
  };


  let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
  }
  console.log(todos);

  return(
    <div>
    <h3>Add a task</h3>
    <input placeholder="Add item" value={newtodo}  onChange={updateTodoValue}></input>
    <br></br>
    <button onClick={addNewTask}>Add list</button>
    <hr></hr>
    <h3>Todo List</h3>
    <ul>
      {
      todos.map((todo)=>(
          <li>{todo}</li>
      ))
      }
    </ul>
    </div>
  );
}
  /*let incCount=()=>{
    console.log(count);
    newCount(count+1);
    console.log(count);
  }
  return(
    <div>
    <p>Count={count}</p>
    <button onClick={incCount}>Click me</button>
    </div>
  );
};*/