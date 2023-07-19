import "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to="/home">
            <h1 className="titulo-juego">Videojogos</h1>
            </Link>

            <Link to="/">
            <h2 className="titulo-crear">🏠</h2>
            </Link>

            <Link to="create">
            <h2 className="titulo-crear">Create Videogames</h2>
            </Link>
        </nav>
    )
}

export default Navbar;