import React from 'react'
import Child from './Child'
import Button from './Button'
// parent to child 
// export default function Parent() {
//   return (
//     <div>
//        <p>Parent</p>
//        <Child parent="samarth" profile="React UI developer"/>
//     </div>
//   )
// }

// child to parent 
// export default function Parent() {
//     function childParent(value)
//     {
//         console.log(value);
//     }
//   return (
//     <div>
//        <p>Parent</p>
//        <Child childParent={childParent}/>
//     </div>
//   )
// }

//children access
export default function Parent() {
  return (
    <div>
       <p>Parent</p>
       <Child>
        <Button/>
       </Child>
    </div>
  )
}


