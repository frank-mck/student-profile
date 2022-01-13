import { useState } from 'react';
import './Student.css';

function Student({ firstName, lastName, company, email, pic, skill, grades }) {
  const [showTests, setShowTests] = useState(false);

  return (
    <div data-testid='student' className='student'>
      <div data-testid='pic' className='student-pic'>
        <img src={pic} alt="" />
      </div>

      <div>
        <h1 data-testid='name'>{firstName?.toUpperCase()} {lastName?.toUpperCase()}</h1>
 
        <div className='student-details'>
          <span data-testid='email'>Email: {email}</span>
          <span data-testid='company'>Company: {company}</span>
          <span data-testid='skill'>Skill: {skill}</span>
          <span data-testid='average'>Average: {" "}
            {grades?.reduce((grade, i) => grade = parseFloat(grade) + parseFloat(i)) / grades?.length}{'%'}
          </span>
        </div>
        
      </div>
      
      <div className='btn-container'>
        {!showTests ? (
          <button className='button'>&#43;</button> 
        ) : (
          <button className='button'>−</button>
        )}  
      </div>

  
    </div>
  )
}

export default Student
