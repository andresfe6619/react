import React from "react"; 
import ProductsList from "../ListProducts/Products"



const ListProducts = ({children}) => {
   
    return(
        <div>
            <h2 className="blancoNegro"> {children} </h2>

            <ProductsList  title='WHEY       'imagen ="https://m.media-amazon.com/images/I/31AXmaR3d+L.jpg " quantity="1kg"  scoop='44gr de proteina' Stock= {26} initial= {1}  price={200} id="1"  />
            <ProductsList  title='SM4RT G4INER' imagen = "https://cdnx.jumpseller.com/mis-vitaminas/image/11152503/resize/1800/1800?1645636636"  quantity="1kg" scoop='44gr de proteina' Stock={10} initial={1} price={150} id="2"/>
            <ProductsList  title='BiPro      ' imagen ="https://prodalia.com.co/93458-thickbox_default/bipro-6-libras.jpg "quantity='6lb' scoop='36gr de proteina' Stock={5}  initial={2} price={123}/>
            <ProductsList title='Xplode      ' imagen ="https://nutritienda-cdn.sirv.com/catalog/big/a/4708-bsn-no-xplode-3-0-600g-v4.jpg? "quantity='1kg' scoop='50gr de proteina' Stock={8}  initial={1} price={250}/>
          
    
        </div>
    ) 
}

export default ListProducts;