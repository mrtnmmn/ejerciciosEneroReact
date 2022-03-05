import '../css/EjYari.css'
import {useState} from "react";

function EjYari() {

    const [classColor, setClassColor] = useState('verde');

    return (
        <div className='App-header'>
            <div>
                <button onClick={() => setClassColor('rojo')}>Rojo</button>
                <button onClick={() => setClassColor('azul')}>Azul</button>
                <button onClick={() => setClassColor('verde')}>Verde</button>
            </div>
            <div className={classColor}>
                <p>El color seleccionado es {classColor}</p>
            </div>
        </div>
    );
}

export default EjYari;