import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

    <div>

    {/* NaveBar */}
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

            {/* LOGO y nombre tienda */}
            <Link to='/' className="navbar-brand">
                <img src="https://www.japonalternativo.com/wp-content/uploads/2021/09/naruto-el-mejor-manga-de-la-historia-768x516.jpg" alt="Logo" width="60" height="48" className="d-inline-block align-text-top"></img>
                {/* <div>Tienda Manga Juliana</div> */}
                <span className="navbar-brand mx-auto">Tienda Manga Juliana</span>
            </Link>
        </div>
        
        {/* Este botom de activa cuando la pantalla se minimiza. Debo ajustarlo para quedarse en el centro.  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>

        {/* Menu Inicio, manga y figure */}
        <div className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to = "/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
            <Link to= "/manga" className="nav-link active" aria-current="page" href="#">Mangas</Link>
            <Link to = "/Figure" className="nav-link active" aria-current="page" href="#">Figuras</Link>
            </div>
        </div>

        {/* carrito de compra */}
        <div>
            <CartWidget></CartWidget>
        </div>

        
        
    </nav>
    </div>

    )
};

export default NavBar;