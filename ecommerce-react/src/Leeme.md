> # Bienvenido a mi Proyecto

Hola cris, mi nombre es Andres Felipe,y hoy con mucho orgullo te entrego mi proyecto final, el cual me tomo bastante tiempo construir, pero, que disfruté mucho.


# Archivos

Mi proyecto cuenta con un total de 28 archivos creados por mi y el resto ya venian con la app, Empezaré explicando cuales fueron las intenciones de mi proyecto y el como y por qué de algunas cosas.

## Descripcion General

Mi proyecto en si es mas como un sueño, no se si te importe, pero soy deportista, y siempre he querido una pagina confiable de la cual comprar mis suplementos y demás sin el miedo a ser estafado traté de hacerla lo mas desglosada posibles y en algunas partes varios accesos a las mismas paginas para no tener que dar tanta vuelta , por eso su tematica es el deporte y hace enfoque en las proteinas, creatinas y pre-entrenos, lo primero es decir que el nombre y la imagen del gato musculoso, las hice yo mismo, con la imagen del gato hecha con photoshop.

## Guias

 - ### Este es el link del repositorio en github

https://github.com/andresfe6619/react/tree/main/ecommerce-react/src

 - ### Y aqui un link de la pagina oficial de github donde documentan como se clona

https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository

    

En si, traté de hacerla lo mas intuitiva, lo unico es que de donde tengo los listados grandes de productos no los puedo añadir al carrito :(, le pedí ayuda a mi tutor, pero el me dijo que estaba bien asi de que solo se pudiera comprar desde detalle y que eso no iba a afectar en la calificacion final.
### Firebase
Decidí usar la libreria de firebase puesto que esta era un requisito para el proyecto final y tambien me gustaba .
### Imagenes
Hay una mezcla de imagenes  de la carpeta de imagenes y de internet al final decidí tomar los links de internet para las imagenes de productos porque asi se pueden generar casos donde la imagen no cargue y el Alt pueda ser visto.


# Src
Aqui tengo todos mis archivos creados con sus respectivas logicas.

 - ## Components
   ### Context
   #### CartContext

Aqui se aloja toda la logica del carrito .

 - ### footer

#### footer
Aqui alojo el footer de mi pagina para que sea mostrado en la pagina entera.

 - ### ListProducts

#### item
Aqui es donde el esqueleto o "plantilla" de los <divs> que contienen mis productos.
#### itemCount
Aqui tengo la logica de contadores, aqui recibo el stock y el iniciar de cada producto para luego capturarlo en un state y enviarlo al context para luego reflejar los datos en el carrito.

    export  const  SumarizeRemove  =({Stock, Inicial, id, action}) => {
    
      
    
    const [count, setCount] =  useState(Inicial)
    
    const { setQuantity} =  useContext(CartContext)
    
    const  Remove  =() => {
    
    if (count  >  1 )
    
    setCount(count  -1)
    
      
    
    }
    
    const  Sumarize  = () => {
    
    if (count  <  Stock) {
    
    setCount(count  +  1)
    
    }
    
    }
    
      
    
    const  onAdd1  = () => {action(count)

    setQuantity(count)};

#### itemListHome
Aqui lo que hice fue tomar los productos filtrados por categorias pero juntos para asi ahorrarme un llamado extra y poder reflejar todos los productos en el home, cumpliendo con una de las rubricas.

 - ### modal

#### Closing
Es un boton el cual setea el estado del modal para que se cierre, concretamente en `onClick={() =>  setSign(false)}.`
#### modal
Aqui tengo el modal importado de material con sus respectivos estilos y eventos para poder reutilizarlo.
#### modalLogIn
Aqui tomo el modal y lo transformo en un formulario para registrarse, el cual te pide que confirmes la contraseña , puesto que esta debe ser igual para que envie la "peticion" de registrarse al back end, en este caso, firebase en una coleccion llamada registros, el unico slot que no es obligatorio es el de la fecha porque anda medio raro, hace dias lo probé, y lo probé hoy y no funcionaba, una vez al dar enviar si las contraseñas no coinciden te salta un mensaje y si lo coinciden se cambia un state para enseñar un mensaje de que te registraste
#### modal SignIn
Es practicamente lo mismo que el LogIn pero esta vez es de iniciar sesion, el cual tiene unos simbolos para ver o dejar de ver la contraseña, una vez enviado tambien va a enviar a firestore una peticion de iniciar sesion, tiene su mensaje de sesion iniciada, y tiene un condicional en donde si clickas en "mantener sesion iniciada" guarda tu informacion en el localStorage como sesion  y además,  el navegador te sugerirá guardar la contraseña.     

 - ### NavBar

#### cartWidgetShopping
Aqui tengo el icono del cart de material junto con un menú desplegable dentro de el con sus respectivos eventos y estilos, donde además este solo aparecerá si compraste algo y a la vez tiene el context y la funcion de los eventos del carrito para que te enseñe cuantos objetos hay adentro, cuales y demás informacion, donde tambien tiene un boton que te redirecciona al carrito 
#### NavBar2
que tengo que decir?, es la navBar del sitio que saqué y modifiqué de bootstrap y le añadí los links de las routes, y el icono del carrito
 

 - ### Pages

#### Carrito
Esta es la pagina del carrito, donde ves todos los productos que seleccionaste, en cuanta cantidad, cuanto cuesta cada uno de ellos, el total de todos juntos, donde tambien cuentas con un botón para eliminar productos si tomaste alguno y no te gustó, y tambien donde se encuentra el modal para pocreder al checkout del producto, el cual funciona como los anteriores, con la diferencia de que este toma tu pedido, te da el id de tu pedido, y envia la peticion con tus datos y los productos que escogiste (nombre, precio y cantidad total), el cual al terminar el checkout te enseña un boton de cerrar el cual te redirecciona al inicio de la pagina una vez satisfecha la compra
#### categorys
es una pagina donde serás ocasionalmente redireccionado que como su mismo nombre indica es donde se encuentran alojadas las 3 categorias de productos sobre las cuales si clickas sobre la pantalla te enviará a la categoria que escogiste
#### Creatinas
#### Proteinas
#### Pre-Workouts
Es una pagina la cual por medio de una llamada a la firebase con  `const  collectionRef  =  query(collection(RAM, 'Productos'), where('category', '==', "Categoria deseada"))`
filtra unicamente las creatinas, proteinas o pre-entrenos (depende cual necesites) y usa el item.js para reflejar las mismas, las cuales contienen un link en su imagen para redireccionarte a una pagina con la imagen o al detalle del producto, cuenta con un condicional el cual te avisa cuando se están llamando dichos productos

#### Deliverys
Esta es una pagina en la cual explico las politicas de envios de las paginas que no hayan mal entendidos como suele suceder en paginas donde no dan informacion y luego ocurren lloros y tragedias 

#### Detalle 
esta es la pagina a la cual se es redireccionado cuando clickas en el boton de comprar en algun producto, la cual llama un solo producto de la Firebase, y lo filtra por su ID unico

    const  getProduct  =  async () => {
    
      
    
    const  collectionRef  =  doc(RAM, 'Productos', id)
    
    const  ProductSnapshot  =  await  getDoc(collectionRef);
    
      
      
    
    if (ProductSnapshot.exists()) {
    
    let  Product  =  ProductSnapshot.data();
    
    Product.id=  ProductSnapshot.id;
    
    setProduct(Product);
    
    }else{
    
      
    
    }
    
      
      
    
    }

, y esta a su vez filtra mas detalles que los listados para poder tener toda la informacion del producto y poder proceder a comprar el mismo, el cual al comprar, aparecerá un botón de comprar que te enviará directamente al carrito y otro para volver a comprar otros productos, y donde tambien seteo la cantidad de productos que voy a comprar con el itemCount y el precio

    const [contador, setContador] =  useState(0)
    
    const [price, setPrice] =  useState(0)
    
    const  Sumarize  = (count) => {
    
    setContador(Proteina.quantity =  count)
    
    setPrice(Proteina.price =  Proteina.price*  count)

#### Error
esta es la pagina de error de toda la vida
#### Home
Esta es la pagina home donde tengo integrado el listado entero de productos, un iframe, un poco de texto y es lo primero que ves al entrar a la pagina

#### Services
Es una pagina destinada a ofrecer servicios como acompañamientos, membresias, recetas, etc,
la cual quise añadir a modo de "Estamos trabajando en la pagina"

 - ## Styles

 #### img 
es la carpeta donde tengo todas las imagenes del proyecto descargadas y de donde las importo cuando las voy a usar

 #### css y scss
Decidí usar la extension y el compilador de SASS que me propinaba VS para tener la hoja de estilos un poco mas organizada y "prolija" implementé distintas media querys y usé demasiadas clases, y un par de Id,s en 
_meowsculuos. scss

# App
Aqui tengo todas las rutas configuradas junto con mis estilos y todos los imports de las distintas funciones y componentes para ser utilizados y organizados para que asi la pagina no tenga que cargar nuevamente cada vez que se ingrese a cada de sus achivos


#### Curiosidades
-los productos de la pagina son los que yo he probado y me han gustado

-la imagen del gato musculoso la saqué de Fortnite de un personaje

-La imagen de fondo del NavBar es de kimetsu no yaiba un anime que le recomendaria a cualquiera puesto que su animacion e historia son fascinantes 

-los datos personales ficticios son de super heroes de marvel y DC

#### Aprendizaje  
a lo largo del curso me topé con demasiadas paredes y no solo yo si no tambien muchos compañeros, y las paredes eran altas y bastante dificiles de escalar, puesto que mucha de la documentacion de React que hay en internet estaba o desactualizada o contabas con el infortunio de que encontrabas tu problema y dabas con un post que decia "es un bug, estamos trabajando en ello " (._. ) lo cual era muy frustrante y me tomo varias noches  de quedarme hasta las 2 am trabajando en el proyectom vi que a muchos compañeros les tocaron tutores horribles, iban 4 o5 trabajos atrasados y si bien yo siempre estuve al dia, me costaba demasiado e incluso consideré desistir, pero no lo hice, y fue una muy buena decision porque ya por fin he culminado esto con tanto esfuerzo y me siento muy orgulloso, de verdad, pude haber tenido 1000 errores, pero  1000 errores logré corregir con ayuda de compañeros y tutores, esto me dejó una experiencia muy genial, y de verdad, cris, muchas gracias por todo, gracias por ser tan buen profesory dar lo mejor de ti, incluso los dias de feriado, fue un curso dificil, mas que nada porque los errores eran diminutos y pasabas horas buscando que rayos fallaba, pero gracias a ti y a mi tutor llegué a donde llegué, gracias por enseñar tanto y tener tanta paciencia, me despido.

¡Mucha suerte y muchos exitos en tu vida!.
