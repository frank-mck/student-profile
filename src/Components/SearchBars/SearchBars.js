import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { tagsState } from "../../atoms/tagsState";
import './SearchBars.css'

function SearchBars({ setStudents, students }) {
  const studentsRef = useRef(students);
  const tagState = useRecoilValue(tagsState);
  const [preferences, setPreferences] = useState(['', ''])

  const filterPreferences = (nameAndTag) => {
    const allStudents = studentsRef.current[0];
    setPreferences(nameAndTag);

    // save a reference of all students if none
    studentsRef.current.length < 1 && studentsRef.current.push(students);

    // Search if students full name starts with the name typed
    const searchByName = (str) => str?.toUpperCase().startsWith(nameAndTag[0]?.toUpperCase());

    // filter by name and tag
    const filterStudents = allStudents.filter(student => {  
      let { firstName, lastName } = student;
      
      // returns true if a student is found with the tag typed
      let tagFound = tagState.find(tag => tag[firstName]?.startsWith(nameAndTag[1]));
      let foundStudent = searchByName(firstName) || searchByName(lastName);

      if (nameAndTag[0] && nameAndTag[1]) {
        return tagFound && foundStudent ? true : false;
      } else if (nameAndTag[0] && !nameAndTag[1]) {
        return foundStudent ? true : false;
      } else if (nameAndTag[1] && !nameAndTag[0]) {
        return tagFound;
      } else {
        return true
      }
    });

    // if there is a value in any input field then set the filtered students otherwise set all student from the reference
    nameAndTag[0] || nameAndTag[1] ? setStudents([...filterStudents]) : setStudents(allStudents);
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