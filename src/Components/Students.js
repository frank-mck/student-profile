import { useEffect, useState } from "react";
import fetchStudents from "../Utils/fetchStudents";
import Student from "./Student";

function Students() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchStudents();
      setData(res.students);
    }   

    getData();    
    }, []);
console.log(data)
  return (
    <div>
      {data.map(student => {
        const { id, firstName, lastName, city, company, email, pic, skill, grades } = student; 

        return (
        <Student 
          key={id}
          firstName={firstName}
          lastName={lastName}
          city={city}
          company={company}
          email={email}
          pic={pic}
          skill={skill}
          grades={grades}
        />
        )}
      )}
    </div>
  )
}

export default Students
