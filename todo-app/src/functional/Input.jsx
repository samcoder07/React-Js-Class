import React, { useState } from 'react'

export default function Input(props) {
    let [todo,setTodo]=useState('');
    let [error,setError]=useState(false);

    const inputChange=(event)=>{
        setTodo(event.target.value);
        // console.log("input");

        if (event.target.value.length > 0) {
            setError(false);
        }else{
            setError(true);
        }
    }

    const submit=(event)=>{
    if(todo.length>0){
        props.addTodo(todo);
    }else{
        setError(true)
    }
      event.preventDefault();
      setTodo('')
    }

  return (
    <form className='row' onSubmit={submit}>
        <div className="col-10">
            <input 
            type="text"  
            className="form-control" 
            placeholder='Add your task for today...' 
            value={todo}
            onChange={inputChange}/>
            {
                error && <p className='text-danger'>Please Enter task...</p>
            }
        </div>
        <div className="col-2">
            <button type='submit' className='btn btn-primary mb-3'>Add Task</button>
        </div>
    </form>
  )
}
