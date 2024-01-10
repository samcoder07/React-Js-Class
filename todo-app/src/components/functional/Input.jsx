import React, { useState } from 'react'

export default function Input(props) {
    let [todo, setTodo] = useState('');
    let [error, setError] = useState(false);

    const inputChange = (event) => {
        setTodo(event.target.value);

        if(event.target.value.length > 0) {
            setError(false)
        }else {
            setError(true)
        }
    }

    const submit = (event) => {
        event.preventDefault();

        if(todo.length > 0) {
            props.addTodo(todo);
        
            setTodo('')
        }else {
            setError(true)
        }       
    }

    return (
      <form className="row" onSubmit={submit}>
          <h1 className='text-center'>Sam To Do List</h1>
            <div className="col-10 mt-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Todo"
                    value={todo}
                    onChange={inputChange}
                     />

                {
                    error  && <p className='text-danger'>Please Enter Todo</p>
                }
                
            </div>
            <div className="col-2 mt-3">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}
