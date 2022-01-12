import { useRef } from "react";

function SearchByName({ setStudents, students }) {
  const studentsRef = useRef(students);

  const filterStudents = (value) => {
    studentsRef.current.push(students);
    const val = (str) => str.toUpperCase().startsWith(value.toUpperCase());

    const filtered = studentsRef.current[0].filter(student => {  
      return val(student.firstName) || val(student.lastName);
    });

    value ? setStudents([...filtered]) : setStudents(studentsRef.current[0]);
  }
  
  return (
    <div>      
      <input type='text' onChange={(e) => filterStudents(e.target.value)} />
    </div>
  )
}

export default SearchByName
