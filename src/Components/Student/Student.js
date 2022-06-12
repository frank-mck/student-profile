import { useState } from 'react';
import AddTag from '../AddTag/AddTag';
import './Student.css';

function Student({ firstName, lastName, company, email, pic, skill, grades }) {
  const [showTests, setShowTests] = useState(false);

  return (
    <div data-testid='student' className='student'>
      <div data-testid='pic' className='student-pic'>
        <img src={pic} alt="" />
      </div>

      <div>
        <h1 className='student__name' data-testid='name'>{firstName?.toUpperCase()} {lastName?.toUpperCase()}</h1>

        <div className='student-details'>
          <span data-testid='email'>Email: {email}</span>
          <span data-testid='company'>Company: {company}</span>
          <span data-testid='skill'>Skill: {skill}</span>
          <span data-testid='average'>Average: {" "}
            {grades?.reduce((grade, i) => grade = parseFloat(grade) + parseFloat(i)) / grades?.length}{'%'}
          </span>

          {showTests && (
          <div data-testid='tests' className='students-tests'>
            {grades.map((score, index) => (
              <span className='students-grade' key={index * 1000}>
                Test {index+1}: &nbsp;&nbsp; {score + "%"}
              </span>
            ))}
          </div>)}     

          <AddTag firstName={firstName} />
        </div>
        
      </div>
      
      <div className='btn-container'>
        {!showTests ? (
          <button
            data-testid='btn'
            onClick={() => setShowTests(true)}
            className='button'
          >&#43;</button> 
        ) : (
          <button 
            data-testid='btn' 
            onClick={() => setShowTests(false)} 
            className='button'          
          >−</button>
        )}  
      </div>  

        
    </div>
  )
}

export default Student
