import { useEffect, useState } from "react";

export default function StudentList() {
  const [studentList, setStudentList] = useState([])

  const getStudentListFromServer = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setStudentList([{ name: "王晓华" }, { name: "黎明" }])
        resolve(true)
      }, 1000)
    })
  }

  useEffect(() => {
    getStudentListFromServer();
    document.onkeydown = (e) => {
      console.log('hello key down');
    }
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