import { useEffect, useState } from "react";
import { getStudentList } from "../../request";

export default function StudentList() {
  const [studentList, setStudentList] = useState([])

  const fetchStudentListFromServer = async () => {
    const studentData = await getStudentList()
    console.log('studentData', studentData)
  }

  useEffect(() => {
    fetchStudentListFromServer();
    
  }, [])

  return (
    <div className="student-list-wrapper">
      {
        studentList.map(student => (
          <div>{student.name}</div>
        ))
      }
    </div>
  )
}