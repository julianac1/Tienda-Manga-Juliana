import { Form, Link, useParams } from "react-router-dom";
import AttackOnTitanvol33 from "../imagines/AttackOnTitanvol33.jpg";
import chainsawmanvolume12 from "../imagines/chainsawmanvolume12.jpg";
import FullMetalvol27 from "../imagines/FullMetalvol27.jpg";
import GOKUSHUFUDO3 from "../imagines/GOKUSHUFUDO3.jpg";
import listadeProductos from "../productos/ListadeProductos.json";
import { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import Figure from "./Figure";


function Manga() {

    const [productos, setProductos] = useState ([])
    
    const {categoryName} = useParams();

    useEffect (()=>{
        const productosFiltrados = listadeProductos.filter((productos)=>{
            return productos.category == categoryName
        })
        setProductos (productosFiltrados)
    },[])
    

    return(
    
    <div>
        {/* <h1>Seccion {categoryName} "En construccion"</h1> */}
        <h2>Bienvenido a sección {categoryName}</h2>

        {productos.map((productos)=>(

            <div className="card col-md-3" width="auto">
            <Link to={`/item/${productos.id}`} >
            <img src = {productos.image} className="card-img-top" alt="..."></img>
            </Link>
            {/* <img src = {productos.image} className="card-img-top" alt="..."></img> */}
            <div className="card-body">
                <h5 className="card-title">{productos.title}</h5>
                <p className="card-text">{productos.description}</p>
                {/* <Link to={`/item/${productos.id}`}>
                    <img> src = {productos.image} </img>
                </Link> */}
            </div>

            </div>

            



            //Opción simples de como exhibir los productos en el DOM
            // <div>
            //     <h2>{productos.title}</h2>
            //     <p>{productos.description}</p>
            //     <Link to={`/item/${productos.id}`}>
            //         <img src={productos.image} alt="" />
            //     </Link>
            // </div>
        ))}



        {/* Card de bootstrap con la img, titulo y detalle de los productos */}
        {/* <div className="container row">
                <div className="card col-md-3" width="auto">
            <img src = {AttackOnTitanvol33} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Attack On Titan vol. 33</h5>
                <p className="card-text">Eren continúa avanzando mediante el estruendo que arrolla la tierra con la intención de deshacerse de todos los humanos del mundo, a excepción de la isla Paradis. Mikasa, Armin y su grupo quieren ir a Odiha, donde existe la posibilidad de llevar a cabo la revisión del hidroavión que les permitirá perseguir a Eren por el cielo. Pero, para ello, deberán renunciar a Liberio, donde viven las familias de Annie, Reiner y compañía.</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>

        <div className="card col-md-3" width="auto">
            <img src = {chainsawmanvolume12} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">Chainsaw Man vol. 12</h5>
                <p className="card-text">Se ha hecho de rogar, pero la espera ha merecido la pena. En este nuevo volumen conoceremos al demonio de la guerra, Mitaka, una joven estudiante que descubrirá el odio voraz que sienten por ella sus compañeros de clase y que aprovechará para hacerse más y más fuerte. Pero como suele suceder en estos casos, el límite entre lo ético y lo que la beneficia se interpone en su camino. ¿Se dejará llevar Mitaka por su sed de venganza o cederá ante las normas morales?</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>

        <div className="card col-md-3" width="auto">
            <img src = {FullMetalvol27} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">FullMetal Alchemist vol. 27</h5>
                <p className="card-text">Las aventuras de Edward y Alphonse Elric llegan a su fi n en la conclusión de Fullmetal Alchemist. Enfrentarse al padre de los homúnculos les ha hecho replantearse sus creencias y motivaciones, pero a la hora de la verdad todo se resume a lo que se está dispuesto a sacrifi carse por un ser querido...</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>

        <div className="card col-md-3" width="auto">
            <img src = {GOKUSHUFUDO3} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">De yakuza a amo de casa vol. 3</h5>
                <p className="card-text">"Tatsu el Inmortal", el yakuza más temido, se ha convertido en amo de casa tras casarse. En esta ocasión, y para poder comprarle un regalo a su mujer... ¡¡Buscará un trabajo a media jornada por primera vez!! ¡Tercer tomo de esta comedia hogareña!</p>
                <Link href="#" className="btn btn-primary">Ver Detalle</Link>
            </div>
        </div>
        
        </div> */}
        

    </div>

    )
    
}

export default Manga;