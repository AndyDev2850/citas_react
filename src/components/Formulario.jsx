import { useState, useEffect } from "react"
import Error from "./Error";



const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
//La manera en que voy declarando el state debe ser consecuente con el orden de mi formulario
    const [nombre, setNombre] = useState("");
    const [propietario, setpropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");


    const [error, setError] = useState(false);
    //lo hooks siempre se deben poner en la parte superior de la funcion principal, no pueden ir dentro del componente

    

    useEffect(() => {
        if( Object.keys(paciente).length > 0){ //Object.keys detecta si el arreglo tiene algo o esta basio.
            setNombre(paciente.nombre)
            setpropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        } //no necesitamos un else, por que nuestro codigo solo se ejecuta si hay algo en el arreglo.

    }, [paciente])//ese useEffects solo se va a ejecutar cuando paciente haya cambiado, si la dependencia estuviera basia, solo se ejecutaria una vez, pero como tiene un parametro, se va a ejecutar cada vez que [paciente] tenga un cambio.


    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evita que se dispre el boton una vez se recarga la paguina

        //Validacion de formulario
        //como las variables de nombre, propietario, email (etc) estan presentes en todo el componente puedo acceder a ellas


        //puedes usar el método .includes() para verificar si una cadena de texto incluye ciertos caracteres o si un arreglo contiene un elemento específico.
        if([nombre, propietario, email, fecha, sintomas].includes("")) {
            console.log("hay almenos un campo vacio")
            setError(true);

            return;
        }

        setError(false); //cuando la validacion es true, el mensaje sigue apareciendo, para evitar eso, este false le dice a react, que apenas esten llenos todos los campos error va a pasar a falso



        //Onbejto de Pasientes

        const objetoPaciente = {

            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas

        }

        if(paciente.id){
            //Editando el registro
            objetoPaciente.id = paciente.id


            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente ])
        }



        



        //Reiniciar el formulario
        //devuelve el estado del formulario a strings vacios
        setNombre("")
        setpropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
    }



  return (
    <div className="mx-5 md:w-1/2 lg:w-2/5">{/**lg es para pantallas grandes, 2/5 quiere decir 40% */}
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes{" "}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
            
            {/**la siguiente expresion me dice que si error es true, entonces se va a mostrar el parrafo */}
            {/** error && <Error mensaje = "Todos los campos son obligatorios"/> asi seria con un prop llamado mensaje*/}

            { error && <Error> <p>Todos los campos son obligatorios</p></Error>}{/**la sintaxis cambia cuando usamos children, la etiquieta se deja con apertura y cierre, ademas se le quitan las comilas al mensaje */}


            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input 
                id="mascota"
                type="text"
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange = { (e) => setNombre(e.target.value)}  /** e.target.value lee el valor actual de un elemento html*/
                />
            </div>


            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input 
                id="propietario"
                type="text"
                placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={propietario}
                onChange = { (e) => setpropietario(e.target.value)}
                />
            </div>


            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                id="email"
                type="email"
                placeholder="Email Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={email}
                onChange = { (e) => setEmail(e.target.value)}
                />
            </div>


            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                <input 
                id="alta"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={fecha}
                onChange = { (e) => setFecha(e.target.value)}
                />
            </div>


            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea
                className="w-full border-2 rounded-md p-2 placeholder-gray-400 mt-2"
                placeholder="Describe los sintomas"
                value={sintomas}
                onChange = { (e) => setSintomas(e.target.value)}
                />
            </div>


            <input
            type="submit"
            className="bg-indigo-600 w-full text-white p-3 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value= { paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            ></input>

        </form>
    </div>
    
  )
}

export default Formulario
