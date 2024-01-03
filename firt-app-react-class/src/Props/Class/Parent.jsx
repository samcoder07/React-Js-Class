import React, { Component } from 'react'
import Child from '../Functions/Child';

// parent to child 
// export default class Parent extends Component {
//     a=10;
//   render() {
//     return (
//       <div>
//         <p>Parent</p>
//         <Child a={this.a} firstName="deepak"/>
//       </div>
//     )
//   }
// }

// child to parent 
// export default class Parent extends Component {
//    childToParent=(value)=>{
//     console.log(value);
//    }
//   render() {
//     return (
//       <div>
//         <p>Parent</p>
//         <Child childToParent={this.childToParent}/>
//       </div>
//     )
//   }
// }

// child 
export default class Parent extends Component {
  render() {
    return (
      <div>
        <p>Parent</p>
        <Child>
            <Button/>
        </Child>
      </div>
    )
  }
}

