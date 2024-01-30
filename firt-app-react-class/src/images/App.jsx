import React from 'react'

export default function App() {
  return (
    <div>
      {/* {1} */} and import image in this
      <h3>First Implementation</h3>
      <img src={image1} alt="" />
        {/* {2} */}
      <h3>second Implementation</h3>
      <img src={require('./imgepath')} alt="" />
        {/* {3} */}
      <h3>third Implementation</h3>
      <img src="/image path" alt="" />
    </div>
  )
}
