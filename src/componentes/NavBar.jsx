import CartWidget from "./CartWidget";

const NavBar = () => {

    return (

    <div>

    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand">
                <img src="https://www.japonalternativo.com/wp-content/uploads/2021/09/naruto-el-mejor-manga-de-la-historia-768x516.jpg" alt="Logo" width="60" height="48" className="d-inline-block align-text-top"></img>
                {/* <div>Tienda Manga Juliana</div> */}
                <span className="navbar-brand mx-auto">Tienda Manga Juliana</span>
            </a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link active" aria-current="page" href="#">Manga</a>
            <a className="nav-link active" aria-current="page" href="#">Figure</a>
            </div>
        </div>
        <div>
            <CartWidget></CartWidget>
        </div>

        
        
    </nav>
    </div>

    )
};

export default NavBar;