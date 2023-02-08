import { useState } from "react";
import Counter from "./components/Counter";

function App() {

  let _countValue = 10
  const [countValue, setCountValue] = useState(10)

  const handleClick = () => {
    // setCountValue(prev => prev + 1)
    console.log("hello react")
  }

  return (
    <div>
      <Counter onClick={ handleClick } defaultValue={_countValue} />
    </div>
  )
}

export default App;
