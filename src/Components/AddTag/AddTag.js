import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tagsState } from "../../atoms/tagsState";
import './AddTag.css'

function AddTag({ firstName }) {
  const [tag, setTag] = useState('');
  const [tagState, setTagState] = useRecoilState(tagsState);
  
  const addTags = (e) => {
    e.preventDefault();
    let name = {}
    name[firstName] = tag;
    setTagState([...tagState, name]);    
    setTag('');
  }

  return (
    <div>
      <div className="tags">
        {tagState.map((tag, index) => {
          return tag[firstName] && (
            <div key={index} className="tag">{tag[firstName]}</div>
          )          
          })}
      </div>

      <form onSubmit={addTags} >
        <input
          type='text'
          placeholder='Add a tag'
          className='add-tag-input'
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          />
      </form>
    </div>
  )
}

export default AddTag
