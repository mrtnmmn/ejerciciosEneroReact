import './App.css';

import {Route, Routes} from "react-router-dom";

import NavBar from './components/NavBar';
import Primos from './components/Primos'
import Members from './components/Members';
import Ej02Listado from './components/Ej02Listado';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Members/>}/>
        <Route path = '/primos' element = {<Primos num = {3}/>}/>
        <Route path = '/ej02' element = {<Ej02Listado/>}/>
      </Routes>

    </div>
  );
}

export default App;
