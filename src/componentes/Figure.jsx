import { Form, Link } from "react-router-dom";
import bleachFigure from "../imagines/bleachFigure.jpg";
import chainsawmanFigure from "../imagines/chainsawmanFigure.jpg";
import NarutoFigura from "../imagines/NarutoFigura.jpg";
import pokemonFigura from "../imagines/pokemonFigura.jpg";




function Figure() {
    return(
        
        <div>
            <h1>Seccion figure "En construccion"</h1>

            <div className="container row">
        
        <div className="card col-md-3" width="auto">
            <img src = {bleachFigure} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Bleach</h5>
                <p className="card-text">Figura de 15cm de Kurosaki Ichigo</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>

        <div className="card col-md-3" width="auto">
            <img src = {chainsawmanFigure} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Nendoroid Chainsaw Man</h5>
                <p className="card-text">Nendoroid Power Chainsaw Man Action Figure Anime</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>

        <div className="card col-md-3" width="auto">
            <img src = {NarutoFigura} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Figura 25 cm Uzumaki Naruto</h5>
                <p className="card-text">Figura Naruto Uzumaki BST AXN Naruto Shippuden</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>

        <div className="card col-md-3" width="auto">
            <img src = {pokemonFigura} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Pokemon</h5>
                <p className="card-text">Pokemon Scale World Kanto SYLPH & Company Figure Four-Pack</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>
        
        </div>


        </div>

        
    )
}

export default Figure;