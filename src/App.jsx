import ReportButton from "./components/ReportButton"

function App() {

  const obj = {
    a: 1,
    b: 2
  }

  obj[Symbol.iterator] = function* () {
    for (let prop in obj) {
      yield [prop, obj[prop]]
    }
  } 

  return (
    <div>
      <ReportButton />
    </div>
  )
}

export default App;
