import React, { useEffect, useState } from "react";

export default function app() {
  let [counter, setCounter] = useState(0);

  // // component did update
  // useEffect(() => {
  //   console.log("useEffect() called");
  // });

  // // component did mount
  // useEffect(() => {
  //   console.log("useEffect() called");
  // },[]);

  // // component did update with dependencies
  useEffect(() => {
    console.log("useEffect() called");
  },[counter])

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="center">
      {console.log("return render")}
      <p>counter:10</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
