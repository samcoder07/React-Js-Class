import React, { Component } from 'react'
// parent to child 
// child to parent 
// export default class Child extends Component {
//     // buttonClicked=()=>{
//     //     this.props.childToParent(Math.random())
//     // }
//     buttonClicked=()=>{
//         this.props.childToParent(Math.random())
//     }

//   render() {
//     return (
//       <div>
//         <p>Child</p>
//         <button onClick={this.buttonClicked.bind(this)}>
//             Child to Parent data transfer
//         </button>
//       </div>
//     )
//   }
// }


// child 
export default class Child extends Component {
  render() {
    return (
      <div>
        <p>Child</p>
        {
            this.props.children
        }
      </div>
    )
  }
}

