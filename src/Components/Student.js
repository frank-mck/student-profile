function Student({ id, firstName, lastName, city, company, email, pic, skill, grades }) {
  return (
    <div className='student'>
      <div className='student-pic'>
        <img src={pic} alt="" />
      </div>

      <h2 className="student-name">{firstName} {lastName}</h2>
    </div>
  )
}

export default Student
