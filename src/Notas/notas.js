//una funcion de reat tiene 2 partes separadas por un return
function Appi(){
    const sumar = (num1, num2) => {
        return num1 + num2;
    }
    sumar(2,4);
    console.log(sumar(4,5))

    const gato = "Bonito";


    //Antes del return es todo codigo js, despues del return es codigo jsx que es el que finalmente se vera en pantalla, en el return no se pueden poner funciones ni if, se admite la inyeccion de variables usando {} y la validacion de informacion usando el operador ternario.

    //toLowerCase() -> convierte a minusculas
    //toUperCase() _> convierte todo a mayusculas

    // es posible imprimir variables dentro del return
    return (
        <>
            <h1>{"felinos Bonitos".toLowerCase()}</h1> 
            <h3>{gato}</h3>
        </>
    )
}
export default Appi;


//_____________________________________________________________________________________________________

//Los componentes deben ser nombrados con la primer letra en Mayuscula, tanto el archivo como el nombre del componente
//Cuando usamos vite para crear nuestra aplicacion se necesita la extencion .jsx, si estuvieramos usando crate react app podriamos usar .js

//Un componentes es una funcion

//todos los componentes en jsx requieren un return

//ES7 React es una extencion que nos permite armar la estructura del componente mas rapidamente, podemos usar "rfce" para crear componentes con la funcion declarada, osea partiendo con la palabra function..... "rafce" me crea la estructura del componente con una arrow function.
//En React puedo usar la function declarada o la arrow function, en cualquier caso ambas son correctas


//npx vite -> para levantar un servidor


//Instalacion de tailwind
// npm install -D tailwindcss postcss autoprefixer  => tambien es necesrio instalar postcss y autoprefixer, las necesita tailwind para funcionar
//npx tailwindcss init -p  => on este comando creamos 2 archivos necesarios para la configuracion de tailwind, son archivos que no tenemos que modificar, solo se necesitan para funcionar


/*
En el index.css debemos colocar estas dependencias:
@tailwind base;
@tailwind components;
@tailwind utilities;*/ 


//En el index añadimos a toda la pagina <body class="bg-gray-100 h-screen"> en el body, le colocamos en este caso un gris muy claro, el h-screen hace que el body no se extienda a toda la paguina si no a lo que tenemos de contenido

//content: ["./index.html", "./src/**/*.jsx"] en el erchivo tailwind config -> para no definir archivo por archivo uso "./src/**/*.jsx" que lo que dice es que va a escaner todos los archivos y va a aplicar tailwind a los que tengan la extencion jsx
//si en vez de content dice purge es por que aun usa la version 2 de tailwind, lo puedo cambiar sin problema.

//para separar texto de una etieueta dentro de otra como por ejemplo <h1>Hoa soy un {" "}<span>Gato</span></h1>  la manera de separarlas es usando los corchetes y agregando un espacio en la cadena de texto vacia.  {" "}



//=======================================================================================================================

//LOS HOOKS EN REACT
//los hooks son la base de react, el tema mas importante que debo dominar -> los Hooks se dividen en basicos y adicionales
//Entre los basicos esta useState useEfect y useContext
//uno pude crear sus propios hooks, funciones reutilizables que se pueden agregar al api de react

//la pieza mas importante de las aplicaciones de React es el state, es decir el estado del componente, por ejemplo un carrito de compras, esta basio? o lleno

//sintaxis basica del state
import { useEffect, useState } from "react";
//estoy abstrallendo las variables cliente y setCliente de useState, es un destructuring de arreglos
const[cliente, setCliente] = useState({});

//Cliente es la variable, la que contiene el valor del estado
//setCliente es el modificador, es la funcion que va a modificar la variable de cliente, no puede modificar otros estados, unicamente ese cliente.
//useState, es el valor inicial, en este caso el cliente inicia como un objeto vasio, a medida que vallamos ingresando datos, ese objeto se va a ir llenando.
//Puedo tener multiples estados por componente


//React reacciona al state, cada vez que el state cambia mi aplicacion va a renderizar y a actualizar con esos cambios

//la variable del lado izquierdo, cliente siempre se debe modificar con la variable del lado derecho setCliente, nunca por asignacion ose algo como cliente = "Andres Florez", eso esta mal


//REGLAS DE LOS HOOKS
//Los hooks se deben poner en la parte superior de los componentes, justo despues de declara el componente
//No se deben colocar dentro dec ondicionales ni despues de un return



//=======================================================================================================================

//onChange es igual que el addevenListened -> escucha el evento

//los eventos en React son  camelCase -> por ejemplo onChange, onClick, los ebentos disponibles en js estan tambien disponibles en react
// sintaxis en HTML de un evento

/*
<button oneclick = "descargarPedidos()">
    adecsrgar apedidos
</button>

//Sintaxis en jsx
<button oneClick = {descargarPedidos()}>
    adecsrgar Pedidos
</button>
*/



//=======================================================================================================================

//Props son propiedades

//Los props son una forma de pasar variables o funciones de un componente a otro
// => los props se pasan del padre al hijo
//cada state que creamos en un componente, solo vive en ese componente, pero algunas veces queremos pasarlos a otros componentes, alli funcionan los props, se pasan del padres al hijo.

/**
 * 
 * si tengo un state que va a pasar por uchos componentes, lo mejor es colocarlo en el archivo principal, en este caso App.jsx
 * 
 * sintaxis
 * 
 * <Header 
 *  nombreProp = {datos o funciones} 
 * /> 
 * 
 * la parte del lado izquierdo es el nombre del prop y la parte del lado derecho son las propiedades o funciones
 */






//=======================================================================================================================

//children es una palabra reservada que hace referencia a todo lo que le pases a un componente, puede ser una funcion o codigo html

//En React, un "children" se refiere al contenido que se encuentra dentro de un componente y que se pasa como prop. Puede ser cualquier cosa, desde texto simple hasta otros componentes anidados. El prop "children" permite crear componentes más reutilizables y flexibles, ya que el contenido del componente puede ser variado sin necesidad de crear un nuevo componente para cada caso de uso. Además, los children pueden ser modificados, ordenados y filtrados dinámicamente en tiempo de ejecución utilizando los métodos de array de JavaScript.    







//=======================================================================================================================

//despues de useState, el hook mas comun es useEffect, siempre es un callback, siempre voy a tener una arrow function, se ejecuta cuando un state cambia o cuando el componente esta listo. 

//su uso:
//debido a que se ejecuta automaticamente cuando el componente esta listo, es un excelente lugar para colcar codigo para consultar una API, o localStorage

//sitaxis: debe importarse imoprt { useEffect } from "react"

/**
 * useEffects(() => {
 *  console.log("El componente esta listo")
 * }, [])   en este arreglo van las dependencias
 */


































































































































