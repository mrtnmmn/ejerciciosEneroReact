import {Link} from 'react-router-dom'
 
function NavBar() {
    return <div>
        <Link to="/">Home</Link> |&nbsp;
        <Link to="/primos">Primos</Link> |&nbsp;
        <Link to="/ej02">Listado</Link>
    </div>;
}

export default NavBar;