import React from 'react'
import Header from './Header'
import { ReactDOM } from 'react-dom'
export default function App() {
  return (
    <div>
      <p>Portals</p>
      {
        ReactDOM.createPortal(<Header/>,document.getElementById("header"))
      }
    </div>
  )
}
