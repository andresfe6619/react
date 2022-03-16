import React from "react"; 






const ProductsList = (props) => {
    
        return(
            <div className="Productos" >
                <h2>{props.title}</h2>
                <img src = {props.imagen}   width="400"
     height="341"></img>
                <p>Precio : $ {props.price}</p>
                <p>Cantidad :  {props.quantity}</p>
                <p>Cada servicio  :  {props.scoop} de Proteina</p>
                <button> Comprar </button>
            </div>
        )
    
}

export default ProductsList
