import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
    let [todos,setTodos]=useState(['dinner','badminton','bike','car'])
    // console.log(todos);\

    const addTodo=(value)=>{
        todos.push(value);
        // console.log(todos);
        setTodos([...todos,value]);
    }
  return (
    <div className="container mt-4">
      <Input addTodo={addTodo}/>
      <List todos={todos}/>
    </div>
  );
}
