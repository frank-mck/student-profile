import './Student.css';

function Student({ id, firstName, lastName, city, company, email, pic, skill, grades }) {
  return (
    <div className='student'>
      <div className='student-pic'>
        <img src={pic} alt="" />
      </div>

      <div>
        <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
 
        <div className='student-details'>
          <span>Email: {email}</span>
          <span>Company: {company}</span>
          <span>Skill: {skill}</span>
          <span>Average: {" "}
            {grades.reduce((grade, i) => grade = parseFloat(grade) + parseFloat(i)) / grades.length}
          </span>
        </div>
        
      </div>
        
    </div>
  )
}

export default Student
