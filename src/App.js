import './App.css';

import Primos from './components/Primos'
import Members from './components/Members';

function App() {
  return (
    <div className="App">
      <Primos num = {3}/>
      <Members/>
    </div>
  );
}

export default App;
