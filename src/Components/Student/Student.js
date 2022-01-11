import './Student.css';

function Student({ firstName, lastName, company, email, pic, skill, grades }) {
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
            {grades?.reduce((grade, i) => grade = parseFloat(grade) + parseFloat(i)) / grades?.length}
          </span>
        </div>
        
      </div>
        
    </div>
  )
}

export default Student
