import { useRef } from "react";

function SearchByName({ setStudents, students }) {
  const studentsRef = useRef(students);

  const filterStudents = (value) => {
    studentsRef.current.push(students);

    const filtered = studentsRef.current[0].filter(student => {  
      const {firstName, lastName } = student;
      const val = (str) => str.toUpperCase().startsWith(value.toUpperCase());

      return val(firstName) || val(lastName) ? true : false;
    });

    value ? setStudents([...filtered]) : setStudents(studentsRef.current[0])
  }
  return (
    <div>      
      <input type='text' onChange={(e) => filterStudents(e.target.value)} />
    </div>
  )
}

export default SearchByName
