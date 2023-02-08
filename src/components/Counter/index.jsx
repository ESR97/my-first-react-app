import { useState } from "react";

export default function Counter(props) {
  
  const [count, setCount] = useState(props.defaultValue || 0);
  const [dialogVisible, setDialogVisible] = useState(false);

  console.log("组件渲染",props)

  const increase = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    // console.log("count update", count)

    setDialogVisible(true)
  }

  const decrease = () => {
    setCount(prev => prev - 1);
  }

  window.getCount = () => {
    console.log("count",count)
  }

  return (
    <div>
      <div onClick={props.onClick} style={{ width: '100px', height: '200px', backgroundColor: 'red' }}></div>
      <button onClick={() => console.log('hello button')}>click me</button>
      {/* <button onClick={increase}>+</button>
      <span>{ count }</span>
      <button onClick={decrease}>-</button>
      <span>{props.defaultValue}</span> */}
    </div>
  )
}
// 123