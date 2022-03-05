import {Link} from 'react-router-dom'
 
function NavBar() {
    return <div className='App-header-nav'>
        <Link to="/">Home</Link> &nbsp;|&nbsp;
        <Link to="/primos">Primos</Link> &nbsp;|&nbsp;
        <Link to="/ej02">Listado</Link> &nbsp;|&nbsp;
        <Link to="/ej04">Ej04</Link> &nbsp;|&nbsp;
        <Link to="/ej05">Ej05</Link>
    </div>;
}

export default NavBar;