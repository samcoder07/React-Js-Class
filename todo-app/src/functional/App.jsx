import React, { useState } from 'react'
import Input from './Input'
import List from './List'
export default function App() {
  let [todos,setTodos]=useState(['bike','car','lunch','dinner'])
  console.log(todos);
  return (
    <div className='container mt-4'>
      <Input/>
     <List/>
    </div>
  )
}
