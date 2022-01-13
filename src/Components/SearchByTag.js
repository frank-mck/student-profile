import { useRef, useState } from "react";

function SearchByTag({ students, setStudents }) {
  const studentsByTagRef = useRef(students);
  const [string, setString] = useState('')

  const filterByTag = (value) => {
  
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
