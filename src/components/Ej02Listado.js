import {useState} from "react";

function Ej02Listado() {

    const [number, setNumber] = useState(undefined);
    const [arrayNumber, setArrayNumber] = useState([] );

    function handleSubmit(ev){
        ev.preventDefault();
        let newArrayNumbers = [...arrayNumber];
        newArrayNumbers.push(Number(number) );
        setArrayNumber(newArrayNumbers);
        console.log(arrayNumber);
    }

    let media = () => {
        let sum = arrayNumber.reduce((previous, current) => current += previous);
        return sum / arrayNumber.length;
    }

    let deleteNumber = (idNum) => {
        let numbers = arrayNumber.filter((element) => element !== idNum)
        setArrayNumber(numbers)
    }

    return <div>
        <form>
        <input type="number" onChange={ (e)=>setNumber(e.target.value) } />
            <button onClick={handleSubmit}>Add</button>
        </form>

        <ul>
            {arrayNumber.map((item) => {
                return (
                    <div key={item}>
                        {item} &nbsp;
                        <button onClick={ () => deleteNumber(item) }>Borrar</button>
                    </div>
                );
            })}
        </ul>

        {arrayNumber.length > 0 ? <p>media: {media()}</p> : <p>no hay suficientes datos para calcular la media</p> }

    </div>;
}

function addNumber() {
    
}

export default Ej02Listado;