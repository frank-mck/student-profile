import { useState } from "react";
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
      <div data-testid='tags' className="tags">
        {tagState.map((tag, index) => {
          return tag[firstName] && (
            <div data-testid='tag' key={index} className="tag">{tag[firstName]}</div>
          )          
          })}
      </div>

      <form onSubmit={addTags} >
        <input
          data-testid='add-tag-input'
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
