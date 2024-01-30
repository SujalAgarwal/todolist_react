import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const[todoItems,set_items]=useState([])
  const handletask=(itemname,itemdate)=>{
    
      const newtodoitems=[...todoItems,{
        name:itemname,
        dueDate:itemdate
      }];
      set_items(newtodoitems);
  }
  const deletetask=(itemname)=>{
      console.log(itemname);
      const newtodoitems=todoItems.filter(item=>item.name!==itemname);
      set_items(newtodoitems);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addtask={handletask}/>
      {todoItems.length==0 && <WelcomeMessage/>}
      
      <TodoItems todoItems={todoItems} removetask={deletetask}></TodoItems>
    </center>
  );
}

export default App;
