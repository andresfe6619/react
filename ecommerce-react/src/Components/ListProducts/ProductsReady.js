import React from "react"; 
import ProductsList from "./Products"



const ListProducts = ({children}) => {

    return(
        <div>
            <h2 className="blancoNegro"> {children} </h2>

            <ProductsList  title='WHEY       'imagen ="https://m.media-amazon.com/images/I/31AXmaR3d+L.jpg " quantity="1kg"  scoop='40gr'  price={200}/>
            <ProductsList  title='M4SS G4INER' imagen = "https://cdnx.jumpseller.com/mis-vitaminas/image/11152503/resize/1800/1800?1645636636"  quantity="1kg" scoop='44gr' price={150}/>
            <ProductsList  title='BiPro      ' imagen ="https://prodalia.com.co/93458-thickbox_default/bipro-6-libras.jpg "quantity='6lb' scoop='36gr' price={123}/>
            <ProductsList title='Xplode      ' imagen ="https://nutritienda-cdn.sirv.com/catalog/big/a/4708-bsn-no-xplode-3-0-600g-v4.jpg? "quantity='1kg' scoop='50gr' price={250}/>
        </div>
    ) 
}

export default ListProducts;