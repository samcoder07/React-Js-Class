import React, { Component } from 'react'

export default class Input extends Component {
    constructor(){
        super();
        this.state = {
            todo:''
        }
    }

    inputChange=(event)=>{
        this.setState({
            todo:event.target.value
        })
    }

    submit=(event)=>{
           event.preventDefault();
           if (this.props.editData.index === -1) {
               this.props.addTodo(this.state.todo);
           } else {
              this.props.updateTodo(this.props.editData.index, this.state.todo);
           }

           this.setState({todo: ''})
    }

    componentDidUpdate(prevProps,prevState){
        if (prevProps.editData.index !== this.props.editData.index) {
            this.setState({
               todo:this.props.editData.data
            })
        }
        console.log(this.props);
    }
  render() {
    return (
        <form className='row' onSubmit={this.submit}>
        <div className="col-10">
            <input 
            type="text"  
            className="form-control" 
            placeholder='Add your task for today...' 
            value={this.state.todo} onChange={this.inputChange}/>
        </div>
        <div className="col-2">
            <button type='submit' className='btn btn-primary mb-3'>
            {
                this.props.editData.index === -1 ? 'Add Task' :'Update Task'
            }
            </button>
        </div>
    </form>
    )
  }
}
