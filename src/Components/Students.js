import { useEffect, useState } from "react";
import fetchStudents from "../Utils/fetchStudents";

function Students() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchStudents();
      setData(res.students);
    }   

    getData();    
    }, [])

  return (
    <div>
      {data.map(trump => (
        <p key={trump.id}>{trump?.lastName}</p>
      )
      )}
    </div>
  )
}

export default Students
