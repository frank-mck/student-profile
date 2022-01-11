import axios from 'axios';
import fetchStudents from "./fetchStudents";

jest.mock("axios");

describe("fetchStudents", () => {
  const BASE_URL = 'https://api.hatchways.io/assessment/students';

    test("should return students", async () => {   
      axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          students: ['INGABERG ORTON', 'CLARKE BOARDS']
        }
      }));

      const result = await fetchStudents();

      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result.students).toEqual(['INGABERG ORTON', 'CLARKE BOARDS']);
    });

 
    test("should return empty students list", async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          students: []
        }
      }));
  
      const result = await fetchStudents();

      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result.students).toEqual([]);
    });
});