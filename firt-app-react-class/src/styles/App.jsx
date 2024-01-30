import React from 'react'

// inline styling 
// export default function App() {
//   return (
//     <div>
//       <p style={{
//         backgroundColor:"red",
//         color:"white",
//         padding:"10px"
//       }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ad cupiditate iusto? Neque, sed quisquam ullam possimus laudantium dignissimos doloremque rerum dolor atque ab perspiciatis voluptates repudiandae iusto quidem?</p>
//     </div>
//   )
// }

// external styling component wise
// import './App.css';
// export default function App() {
//   return (
//     <div className='container'>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ad cupiditate iusto? Neque, sed quisquam ullam possimus laudantium dignissimos doloremque rerum dolor atque ab perspiciatis voluptates repudiandae iusto quidem?</p>
//     </div>
//   )
// }
import  style from './App.module.css';
export default function App() {
  return (
    <div>
      <p  className={style.container}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ad cupiditate iusto? Neque, sed quisquam ullam possimus laudantium dignissimos doloremque rerum dolor atque ab perspiciatis voluptates repudiandae iusto quidem?</p>
    </div>
  )
}