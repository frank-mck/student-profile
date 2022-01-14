import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { tagsState } from "../../atoms/tagsState";
import './SearchBars.css'

function SearchBars({ setStudents, students }) {
  const studentsRef = useRef(students);
  const tagState = useRecoilValue(tagsState);
  const [filter, setFilter] = useState(['', ''])

  const filterByName = (value) => {
    setFilter(value)
    studentsRef.current.push(students);

    const val = (str) => str?.toUpperCase().startsWith(value[0]?.toUpperCase());

      const nameFilter = studentsRef.current[0].filter(student => {  
        let firstName = student.firstName;
        let tagFound = tagState.find(tag => tag[firstName]?.startsWith(value[1]));
        let foundStudent = val(student.firstName) || val(student.lastName);

        if (value[0] && value[1]) {
          return tagFound && foundStudent ? true : false;
        } else if (value[0] && !value[1]) {
          return foundStudent ? true : false;
        } else if (value[1] && !value[0]) {
          return tagFound ? true : false;
        }
      });

    value[0] || value[1] ? setStudents([...nameFilter]) : setStudents(studentsRef.current[0]);
  }

  return (
    <div>
      <div className='search-by-name'>      
        <input
          data-testid='input-name'
          className="name-input"
          type='text'
          value={filter[0] || ''}
          onChange={(e) => filterByName([e.target.value, filter[1]])}
          placeholder='Search by name'
        />
      </div>

      <div className='search-by-tag'>      
        <input
          data-testid='input-tag'
          className="tag-input"
          value={filter[1] || ''}
          type='text'  
          placeholder='Search by tag'
          onChange={(e) => filterByName([filter[0], e.target.value])}
        />
      </div>
    </div>
  )
}

export default SearchBars