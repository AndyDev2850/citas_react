import { useState, useEffect } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'



function App() {
  
  const [pacientes, setPacientes] = useState([]); //ese arreglo son todos los datosdel formulario, empieza como un arreglo vacio que se va a ir llenando
  const [paciente, setPaciente] = useState({});


  //lo que va a hacer este useEffect es obtener lo que haya en localStorage
  useEffect(() => {//se puede tener multiples useEffects en un componente, se ejecutan en el orden en el que estan declarados
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // ?? [] si no hay nada en localStorage entonces agregar un arreglo vacio.
      setPacientes(pacientesLS)
    }

    obtenerLS(); //una vez cargue el componente va a llamar esta funciony va a revisar lo que tengamos arriba
  }, []); //cuando le pasas un arreglo basio se va a ejecutar una sola vez, no se va a ejecutar varias veces.

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes )); //es un arreglo ero este json lo va a convertir en un string
    //ya sea que sea un arreglo vacio o lleno de objetos, lo va a convertir en un string.

  }, [pacientes]) //lo que le estamos diciendo es que cada vez que haya un cambio en pacientes ejecute ese codigo

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)  //pacientes es el arreglo actual y .filter nos permite sacar un elemento del arreglo

    setPacientes(pacientesActualizados)
  }


  return (//mx -> para izquierda y derecha, my o margin y para arriba y abajo, mt -> margin top para arriba
  //El div de abajo envuele el formulario y el listado de pacientes para aplicar un flexbox 
    <div className='container mx-auto mt-20'> 

   
      <Header


        //todo esto puedo pasar como props
        // numeros={ 1 }
        // isAdmid = {false}
        // funt = { imprimirNumeros }


      />

      <div className='mt-12 md:flex'>{/**md:flex va a hacer que en dispositivos medianos, no se vean 2 columnas si no uno arriba y el otro abajo */}
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}//Esta funcion se debe poner aqui en el formulario por que es el formulario
        //la parte del lado izquierdo es el nombre del prop y el del lado derecho son las funciones, en este caso se llaman igual.
        paciente = {paciente}
        setPaciente = {setPaciente}
        />


        <ListadoPacientes
        pacientes = {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
