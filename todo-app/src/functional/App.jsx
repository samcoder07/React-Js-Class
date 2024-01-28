import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
    let [todos,setTodos]=useState(['dinner','badminton','bike','car'])
    let [editData,seteditData]=useState({
      index:-1,
      data:''
    });
    // console.log(todos);\

    const addTodo=(value)=>{
        todos.push(value);
        // console.log(todos);
        setTodos([...todos,value]);
    }

    const deleteTodo=(value)=>{
      let filterTodos=todos.filter(todo=>todo !== value);
      setTodos(filterTodos)
    }

    const editTodo=(index,data)=>{
       console.log(index,data);

       seteditData({
        index,data
       })
    }

    const updateTodo=(index,data)=>{
      todos.splice(index,1,data)

      setTodos([...todos])
    }
  return (
    <div className="container mt-4">
      <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo}/>
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  );
}
