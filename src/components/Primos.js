function Primos({num}) {
    return <p>El numero {num} {esPrimo(num)? 'es primo': 'no es primo'}</p>
}


const esPrimo = numero => {
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

export default Primos;