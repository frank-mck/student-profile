const axios = require('axios');

const fetchStudents = async () => {
  const students = await axios.get('https://api.hatchways.io/assessment/students', {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return students.data;
}

export default fetchStudents;