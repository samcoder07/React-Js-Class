import React from 'react'

// parent to child 

// export default function Child(props) {
//     console.log(props);
//   return (
//     <div>
//       <p>Child</p>
//       <p>Parent: {props.parent}</p>
//       <p>Profile: {props.profile}</p>
//     </div>
//   )
// }

// child to parent 
// export default function Child(props) {
//      let childName="child"

//      function datatransfer() {
//         props.childParent(childName)
//      }
//   return (
//     <div>
//       <p>Child</p>
//       <button onClick={datatransfer}>
//         Transfer data from child to parent
//       </button>
//       <button onClick={()=>datatransfer()}>
//       Transfer data from child to parent
//       </button>
//     </div>
//   )
// }

export default function Child(props) {
  return (
    <div>
      <p>Child</p>
      {
        props.children
      }
    </div>
  )
}

