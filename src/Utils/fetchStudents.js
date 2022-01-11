import axios from 'axios'

const fetchStudents = async () => {
  try {
    const students = await axios.get('https://api.hatchways.io/assessment/students');
    return students?.data;
  } catch(err) {
    console.log(err)
  }
  
}

export default fetchStudents;