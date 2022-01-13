import { useRef, useState } from "react";

function SearchByTag({ students, setStudents }) {
  const studentsByTagRef = useRef(students);
  const [string, setString] = useState('')

  const filterByTag = (value) => {
    setString(value)
    studentsByTagRef.current.push(students);
    const val = (str) => str?.toUpperCase().startsWith(value.toUpperCase());

    const filtered = studentsByTagRef.current[0].filter(student => {  
      return val(student.firstName) || val(student.lastName);
    });

    value ? setStudents([...filtered]) : setStudents(studentsByTagRef.current[0]);
  }
  return (
    <div className='search-by-tag'>      
      <input
        data-testid='input-tag'
        className="tag-input"
        type='text'
        value={string}
        onChange={(e) => filterByTag(e.target.value)}
        placeholder='Search by tag'
      />
    </div>
  )
}

export default SearchByTag
