import React from 'react'

export default function List(props) {
  return (
    <ul className="list-group">
        {
            props.todos.length > 0 ? props.todos.map((value,index)=>{
              return <li className="list-group-item" key={index}>{value}</li>
            }):  <li className="list-group-item">No Todo Available</li>
        }
</ul>
  )
}
