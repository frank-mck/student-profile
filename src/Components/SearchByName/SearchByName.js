import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import './SearchByName.css'

function SearchByName({ setStudents, students }) {
  const studentsRef = useRef(students);
  const [string, setString] = useState('')

  const filterStudents = (value) => {
    setString(value)
    studentsRef.current.push(students);
    const val = (str) => str?.toUpperCase().startsWith(value.toUpperCase());

    const filtered = studentsRef.current[0].filter(student => {  
      return val(student.firstName) || val(student.lastName);
    });

    value ? setStudents([...filtered]) : setStudents(studentsRef.current[0]);
  }
  
  return (
    <div className='search-by-name'>      
      <input
        data-testid='input-name'
        className="name-input"
        type='text'
        value={string}
        onChange={(e) => filterStudents(e.target.value)}
        placeholder='Search by name'
      />
    </div>
  )
}

export default SearchByName
