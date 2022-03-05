import './App.css';

import {Route, Routes} from "react-router-dom";

import NavBar from './components/NavBar'
import Primos from './components/Primos'
import Members from './components/Members'
import Ej02Listado from './components/Ej02Listado'
import Ej05SingularPlural from './components/Ej05SingularPlural'
import Ej04SelectorDeColores from './components/Ej04SelectorDeColores'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Members/>}/>
        <Route path = '/primos' element = {<Primos num = {3}/>}/>
        <Route path = '/ej02' element = {<Ej02Listado/>}/>
        <Route path = '/ej04' element = {<Ej04SelectorDeColores/>}/>
        <Route path = '/ej05' element = {<Ej05SingularPlural/>}/>
      </Routes>

    </div>
  );
}

export default App;
