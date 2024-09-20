import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
  let [todos, setTodos] =useState([{task:"sample Task",id:uuidv4(),isDone:false}]);
  let [newTodo, setNewTodo] =useState("");
 
  let  addNewTask = ()=>{
    setTodos((prevTodoes)=>{
      console.log(prevTodoes);
      return [...prevTodoes, {task:newTodo,id:uuidv4(),isDone:false}]
    });
    setNewTodo("");
  };

  let updateTodoValue =(event)=>{
    setNewTodo(event.target.value);
  };

  let deleteTodo=(id)=>{
    setTodos(()=> todos.filter((todo)=>todo.id !=id));
  };

  let upperCaseAll=()=>{
    setTodos((todos)=>
      todos.map((todo)=>{
        return{
          ...todo,
          task:todo.task.toUpperCase(),
        };
      })
    );
  };

  let MarkAsDone=(id)=>{
    console.log(todos);
    setTodos((prevTodoes)=>
    prevTodoes.map((todo)=>{
      if(todo.id===id){
        return{
          ...todo,
          isDone:true, 
        };
      }else{
        return todo;
      }
    })
    );
  };
 
  return(
    <div>
      <input placeholder="add a Task" value={newTodo} onChange={updateTodoValue}></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <hr></hr>
      <h4>Todo List</h4>
      <ul>
        {
        todos.map((todo)=>(
        <li key={todo.id}>
          <span style={todo.isDone? {textDecorationLine: "line-through"}:{}}>{todo.task}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() =>deleteTodo(todo.id)}>delete</button>
          <button onClick={() =>MarkAsDone(todo.id)}>MarkAsDone</button>

          </li>
        ))
       }
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
}