import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { tagsState } from "../../atoms/tagsState";
import './SearchBars.css'

function SearchBars({ setStudents, students }) {
  const studentsRef = useRef(students);
  const tagState = useRecoilValue(tagsState);
  const [preferences, setPreferences] = useState(['', ''])

  const filterPreferences = (nameAndTagInput) => {
    studentsRef.current.length < 1 && studentsRef.current.push(students);

    const allStudents = studentsRef.current[0];
    setPreferences(nameAndTagInput);
    const { 0: findName, 1: findTag } = nameAndTagInput;

    const searchByName = (str) => str?.toUpperCase().startsWith(findName?.toUpperCase());

    const filterStudents = allStudents.filter(student => {  
      let { firstName, lastName } = student;
      let tagFound = tagState.find(tag => tag[firstName]?.startsWith(findTag));
      let foundStudent = searchByName(firstName) || searchByName(lastName);

      if (findName && findTag) {
        return tagFound && foundStudent ? true : false;
      } else if (findName && !findTag) {
        return foundStudent ? true : false;
      } else if (findTag && !findName) {
        return tagFound;
      } else {
        return true;
      }
    });

    setStudents([...filterStudents]);
  }

  return (
    <div>
      <div className='search-by-name'>      
        <input
          data-testid='input-name'
          className="name-input"
          type='text'
          value={preferences[0] || ''}
          onChange={(e) => filterPreferences([e.target.value, preferences[1]])}
          placeholder='Search by name'
        />
      </div>

      <div className='search-by-tag'>      
        <input
          data-testid='input-tag'
          className="tag-input"
          value={preferences[1] || ''}
          type='text'  
          placeholder='Search by tag'
          onChange={(e) => filterPreferences([preferences[0], e.target.value])}
        />
      </div>
    </div>
  )
}

export default SearchBars