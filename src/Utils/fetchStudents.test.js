import { waitFor, render } from '@testing-library/react';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import Students from '../Components/Students/Students';

jest.mock("axios");

describe("fetchStudents", () => {
  const BASE_URL = 'https://api.hatchways.io/assessment/students';

    test("Makes a call to the students api", async () => {    
      axios.get.mockResolvedValueOnce({ data: []})
      render(<RecoilRoot><Students /></RecoilRoot>)
      
      await waitFor(() => {
        expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      })
    }); 
});