import { useEffect, useState } from "react";
import fetchStudents from "../../Utils/fetchStudents";
import SearchByName from "../SearchByName/SearchByName";
import Student from "../Student/Student";
import './Students.css'

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchStudents();
      setStudents(res.students);
    }   
    getData();      
    }, []);

  return (
    <div data-testid='students' className='students-container'>
      <SearchByName setStudents={setStudents} students={students} />
      {students?.map(student => {
        const { id, firstName, lastName, company, email, pic, skill, grades } = student; 

        return (
          <Student 
            key={id}
            firstName={firstName}
            lastName={lastName}
            company={company}
            email={email}
            pic={pic}
            skill={skill}
            grades={grades}
          />
        )}
      )}
    </div>
  )
}

export default Students
