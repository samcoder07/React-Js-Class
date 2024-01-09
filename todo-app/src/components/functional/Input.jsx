import React from 'react'
import { useState } from 'react'

export default function Input(props) {
    let[todo,setTodo]=useState('');
    let[error,setError]=useState(false);

    const inputChange=(event)=>{
        setTodo(event.target.value);

        if (event.target.value.length>0) {
            setError(false)
        }else{
            
        }
    }
  return (
    <div>
      
    </div>
  )
}
