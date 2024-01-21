import React, { Component } from 'react'

export default class app extends Component {
    // one time on basis of reating state 
    constructor(){
        super()

        console.log("constructor called");
        // multiple time 
        this.state = {
            counter:0
        }
    }
    // 1 time 
    componentDidMount(){
        // this.setState({
        //     coutter:100
        // })
        console.log("componentDidMount");
    }

    // 1 time 
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        });
    }

    // multiple times 
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate called");

        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }

    // multipleTimes
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("getSnapshotBeforeUpdate called");
      return{
        prevProps,
        prevState
      }
    }

    // multiple times 
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log(prevProps,prevState);
    }
  render() {  
    return (
      <div className='center'>
         Component Lifecycle 
         <p>Counter:{this.state.counter}</p>
         <button onClick={this.increment}>Increment</button>
         {console.log("render method called")}
      </div>
    )
  }
}
