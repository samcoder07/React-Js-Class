import React, { useEffect, useState } from 'react'

export default function Input(props) {
    console.log(props);
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
        if (props.editData.index === -1) {
            props.addTodo(todo);
        }else{
            props.updateTodo(props.editData.index,todo);
        }
    }else{
        setError(true)
    }
      event.preventDefault();
      setTodo('')
    }

    useEffect(()=>{
        setTodo(props.editData.data)
    },[props.editData.index,props.editData.data,setTodo])

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
            <button type='submit' className='btn btn-primary mb-3'>
                {
                    props.editData.index===-1 ? 'Add Task' :'Update Task'
                }
            </button>
        </div>
    </form>
  )
}
