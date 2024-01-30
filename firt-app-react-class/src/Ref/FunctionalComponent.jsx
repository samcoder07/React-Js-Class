import React, { useEffect, useRef } from 'react'

export default function FunctionalComponent() {
    let headingRef=useRef();
    useEffect(()=>{
        headingRef.current.innerHTML="hello world from DOM REF"
    },[])
  return (
    <div>
      <h1 ref={headingRef}>Hello world</h1>
    </div>
  )
}
