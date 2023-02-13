import { useState } from "react";
import StudentList from "./components/StudentList";
function App() {

  const [showStudentList, setStudentList] = useState(false);

  return (
    <div>
      <StudentList />
      
    </div>
  )
}

export default App;
