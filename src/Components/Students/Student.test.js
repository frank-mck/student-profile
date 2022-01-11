import { getByTestId, render } from "@testing-library/react"
import Students from "./Students";


test('renders a list of students', () => {
  render(<Students />);
  const students = getByTestId(document.documentElement, 'students');
  expect(students).toBeInTheDocument();
})