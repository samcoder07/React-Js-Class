import React from 'react'
import { useState } from 'react'
import Input from './Input'
import List from './List'
export default function App() {
    let[todos,setTodos]=useState(['game','bike','car','badminton'])

    const addTodo=(value)=>{
        setTodos([...todos,value])
    }

    const editTodo = (value)=>{
      setTodos([...setTodos])
    }

    const updateTodo=(index,data)=>{
      todos.splice(index,1,data);

      setTodos([...todos])
      setEditData({
        index:-1,
        data:''
      })

      toast.success("Todo Updated successfully")
    }
  return (
    <div className='container mt-4'>
      <Input addTodo={addTodo}/>
      <List todos={todos}/>
    </div>
  )
}
