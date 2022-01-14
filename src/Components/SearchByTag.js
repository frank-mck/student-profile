import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { tagsState } from "../atoms/tagsState";

function SearchByTag({ students, setStudents }) {
  const studentsByTagRef = useRef(students);
  const [string, setString] = useState('');
  const [studentsByTag, setStudentsByTag] = useState([])
  const [tagState, setTagState] = useRecoilState(tagsState);

  const filterByTag = () => {
    
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
