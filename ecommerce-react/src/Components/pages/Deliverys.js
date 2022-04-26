import React from "react";
import Cat from "../../Styles/img/mewoscles.png"
import { Link } from "react-router-dom";

export const Deliverys = () => { 
    return (
      <div className="fondoHome">
    
          <h2 className="blancoCentro">
         
 		   POLÍTICAS DE ENVÍOS 
 	      </h2> 

  

          <div className="imagenHome" > <img src={Cat}  alt=" Logo del sitio"/> </div>
  <section className="fondoAmarillo"> 
    

    <h3> ENVIOS</h3>

 <div>Todos los envíos realizados por Meowsculuos shop están soportados por la compañía de transporte Servientrega y son realizados únicamente en territorio Colombiano.

Cualquier envió dentro de Cundinamarca tiene un costo $ 8.500 y/o a nivel nacional un costo de $10.500 por artículo en la orden de compra, o cualquier valor designado por la compañía de Meowsculuos shop.

Los pedidos con metodos de pago contra entrega tienen un valor adicional de $1.500 por articulo en la orden de compra. 

Para pago contra entrega se debe tener una compra minimo de $ 40.000  pesos 

Una vez se realice el envio de su producto le llegara una notificacion al correo electronico registrado al momento de la compra indicandole el numero de al guia con el cual se despacho su producto para su respectivo seguimiento.  </div>

<h3>TIEMPOS DE ENTREGA</h3>

<div>El tiempo de entrega para todos los productos comprados por nuestra tienda virtual ocilan 5 a 15 días para su entrega, los cuales serán contados a partir de la fecha de aprobación de la transacción.

La entrega de los productos está establecida por la compañía de transporte Coordinadora o Servientrega para ser entregado de lunes a viernes en horarios de 8:00 am a 6:00 Pm y sábados de 8:00 am a 1:00 Pm, en caso de NO encontrar el destinatario el paquete entrara a proceso de reexpedición y podrá tomar hasta 3 hábiles adicionales.

Para los pedidos realizados en fines de semana, o festivo, el tiempo de entrega se ampliará 1 o 2 días hábiles extra. </div>

<h3>NORMAS Y RESTRICCIONES DE ENVÍO</h3>

<div>Los pedidos serán enviados únicamente en días hábiles los cuales se catalogan de Lunes a Viernes, excluyendo los sábados, domingo y festivos nacionales de Colombia.


Todas las entregas irán acompañadas con un acuse de recibo denominado orden de despacho.

No se reembolsara los costes de envió en caso de ser reclamado un pedido en cualquier punto de venta ( NO REALIZAMOS ENTREGA DE COMPRAS POR MEDIO DE NUESTRA TIENDA WEB EN TIENDAS FISICAS).

Los tiempos de entrega están sujetos a restricciones viales asignados por el ministerio de transporte y esto podrá repercutir en la extensión de los tiempos de entrega.

Nos reservamos el derecho de cancelar su orden en caso de ser notificado como fraudulento en la plataforma de pasarela de pagos.

Para cualquier inquietud, consulta, sobre compras  en nuetrsa tienda virtual comuníquese a correo electronico servicioalclienteonline@Meowsculuos.com.co </div>
            
              </section>
           
  
          <Link to="/"><button  className="Comprar"> Volver al inicio </button></Link>
      
      </div>
    )}
    