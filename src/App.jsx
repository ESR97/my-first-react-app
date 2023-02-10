import { useState } from "react"

function App() {

  const [inputVal, setInputVal] = useState("")
  const [checked, setChecked] = useState("")

  const handleInputChange = (event) => {
    console.log('event.target.value',event.target.value)
  }

  const handleControlledInputChange = (event) => {
    console.log('event.target.value',event.target.value)
    setInputVal(event.target.value)
  }

  const clearAllFields = () => {
    setInputVal("")
  }

  return (
    <div>
      {/* 非受控 是自由 */}
      <input type="text" onChange={ handleInputChange } defaultValue="初始值"></input>

      <input type="checkbox"></input>

      {/* 受控 */}
      <input value={ inputVal } onChange={ handleControlledInputChange }></input>
      <input type="checkbox" checked={checked} onChange={ (event) => setChecked(event.target.checked) }></input>

      <button onClick={clearAllFields}>清空</button>
    </div>
  )
}

export default App;
