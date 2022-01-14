import { useEffect, useState } from "react";
import fetchStudents from "../../Utils/fetchStudents";
import SearchBars from "../SearchBars/SearchBars";
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
    }, [setStudents]);

  return (
    <div data-testid='students' className='students-container'>

      <div className="search-inputs-container">
        <SearchBars setStudents={setStudents} students={students} />
      </div>      

      <div className="students">
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
    </div>
  )
}

export default Students
