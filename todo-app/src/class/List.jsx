import React, { Component } from 'react'

export default class List extends Component {
    componentDidMount(){
        console.log(this.props);
    }
  render() {
    return (
        <ul className="list-group">
            {
                this.props.todos.length>0 ? this.props.todos.map((todo,index)=>(
                    <li className="list-group-item d-flex justify-content-between" key={index}>
                        <div>{todo}</div>
                        <div>
                            <button className='btn btn-warning' onClick={()=>this.props.editTodo(index,todo)}>Edit</button>
                            <button className='btn btn-danger ms-2' onClick={()=>this.props.deleteTodo(todo)}>Delete</button>
                        </div>
                    </li>
                )):  <li className="list-group-item">No Todos Found</li>
            }
        </ul>
    )
  }
}
