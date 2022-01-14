import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import { useRecoilState } from "recoil";
import { tagsState } from "../../atoms/tagsState";
import './SearchBars.css'

function SearchBars({ setStudents, students }) {
  const studentsRef = useRef(students);
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [tagState, setTagState] = useRecoilState(tagsState);

  const filterByName = (value) => {
    setName(value);
    studentsRef.current.push(students);
    
    const val = (str) => str?.toUpperCase().startsWith(value.toUpperCase());
    const filtered = students.filter(student => {  
      return val(student.firstName) || val(student.lastName);
    });

    value ? setStudents([...filtered]) : setStudents(studentsRef.current[0]);
    if (!value && tag) filterByTag(tag);
  }
  

  const filterByTag = (value) => {
    setTag(value);
    studentsRef.current.push(students);

      const tagFilter = students?.filter(student => {  
          let stu = student.firstName;
          return tagState.find(tag => tag[stu]?.startsWith(value));
      });

      value ? setStudents([...tagFilter]) : setStudents(studentsRef.current[0]);
      if (!value && name) filterByName(name);
  }

  return (
    <div>
      <div className='search-by-name'>      
        <input
          data-testid='input-name'
          className="name-input"
          type='text'
          value={name}
          onChange={(e) => filterByName(e.target.value)}
          placeholder='Search by name'
        />
      </div>

      <div className='search-by-tag'>      
        <input
          data-testid='input-tag'
          className="tag-input"
          value={tag}
          type='text'  
          placeholder='Search by tag'
          onChange={(e) => filterByTag(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBars
