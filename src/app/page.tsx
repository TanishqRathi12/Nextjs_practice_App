'use client'

import { useState } from "react";

const counter = () =>{
  const [count,setCount] = useState(0)
  return (
    <html>
      <body>
        <h4>Your Next Counter: {count}</h4>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(Math.max(0,count - 1))}>Decrement</button>
        <button onClick={()=> setCount(0)}>reset</button>
      </body>
    </html>
  )
}
export default counter;