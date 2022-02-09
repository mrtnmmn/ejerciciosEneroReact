let numbers = []

function Ej02Listado() {

    let renderNumbers =() => {
        return numbers.map((number) => <li>{number}</li>)
    }

    return <div>
        <form>
            <input type = "number" name = "num"/>&nbsp;
            <button>Add</button>
        </form>



        <ul>
            {renderNumbers()}
        </ul>

    </div>;
}

function addNumber() {
    
}

export default Ej02Listado;