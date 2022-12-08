import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listadeProductos from "../productos/ListadeProductos.json";
import Figure from "./Figure";

function ItemContainer() {
    
    const [producto, setProducto] = useState({})
    const {itemID} = useParams()

    useEffect(()=>{
        const encontrarProducto = listadeProductos.find((producto)=> producto.id == itemID)
        setProducto(encontrarProducto)
    },[])

    return(
        <div>
            Detalle del Producto
            <h1> {producto?.title}</h1>
            <p>{producto?.description}</p>
            <img src={producto.image} />
        </div>
    )

}

export default ItemContainer;