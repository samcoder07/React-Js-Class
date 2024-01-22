import React from 'react'

export default function Input() {
  return (
    <form className='row'>
      <div className="col-10">
        <input type="text" className='form-control' placeholder='Add your task of the day...' />
      </div>
      <div className="col-2">
        <button type='submit' className='btn btn-primary mb-3'>Add Task</button>
      </div>
    </form>
  )
}
