function Student({ id, firstName, lastName, city, company, email, pic, skill, grades }) {
  return (
    <div className='student'>
      <div className='student-pic'>
        <img src={pic} alt="" />
      </div>

      <div>
        <h2 className="student-name">{firstName} {lastName}</h2>

        <p>{email}</p>
        <p>{company}</p>
        <p>{skill}</p>
        <p>Average: 
          {grades.reduce((grade, i) => grade = parseFloat(grade) + parseFloat(i)) / grades.length}
        </p>
      </div>
        
    </div>
  )
}

export default Student
