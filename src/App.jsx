import { useState } from "react";
import Counter from "./components/Counter";

function App() {

  let _countValue = 10
  const [countValue, setCountValue] = useState(10)

  const handleClick = () => {
    // setCountValue(prev => prev + 1)
    _countValue++;
  }

  return (
    <div>
      <Counter defaultValue={_countValue} />
      {/* <Counter defaultValue={20} /> */}
      <button onClick={ handleClick }>点击我</button>
      {/* <Counter /> */}
    </div>
  )
}

export default App;
