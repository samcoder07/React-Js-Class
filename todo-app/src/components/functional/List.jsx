import React from 'react'

export default function List(props) {
    return (
        <ul className="list-group mt-3">
            {
                props.todos.length > 0 ? props.todos.map((value, index) => (
                    <li className="list-group-item" key={index}>{value}</li>
                )) :   <li className="list-group-item">No Todo</li>
            }
        </ul>
    )
}

