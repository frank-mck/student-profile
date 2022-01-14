import { RecoilRoot } from 'recoil';
import './App.css';
import Students from './Components/Students/Students';

function App() {
  return (
    <div className="App" data-testid='app'>
      <RecoilRoot>
        <Students />
      </RecoilRoot>
      
    </div>
  );
}

export default App;
