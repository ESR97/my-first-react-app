import { useState } from "react";

export default function Counter() {
  
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1)
    console.log("count update", count)
  }

  const decrease = () => {
    setCount(prev => prev - 1);
  }

  window.getCount = () => {
    console.log("count",count)
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{ count }</span>
      <button onClick={decrease}>-</button>
    </div>
  )
}
// 123