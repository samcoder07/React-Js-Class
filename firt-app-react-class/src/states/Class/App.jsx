import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()

        this.state={
            counter:0
        }
    }
    increment=()=>{
         this.setState({
            counter:this.state.counter+1
         })
         this.setState({
            counter:this.state.counter++
         })
         this.setState({
            counter:++this.state.counter
         })
         this.setState((prevState)=>({
             counter:prevState.counter+5
         }))
    }
    decrement=()=>{
        this.setState({
            counter:this.state.counter-1
         })
    }
  render() {
    return (
        <div className='center'>
        <p>Counter:{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
