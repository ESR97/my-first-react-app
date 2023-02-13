import { useState } from "react";
import StudentList from "./components/StudentList";

function App() {

  const [showStudentList, setStudentList] = useState(false);

  return (
    <div>
      <button onClick={ () => setStudentList(prev => !prev) }>{ showStudentList ? "隐藏" : "显示" }学生列表</button>
      { showStudentList ? <StudentList /> : null }
    </div>
  )
}

export default App;
