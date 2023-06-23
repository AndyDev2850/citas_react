import Pacientes from "./Pacientes";
import { useEffect } from "react";


const ListadoPacientes = ({ pacientes, setPaciente, paciente, eliminarPaciente }) => {


    //Reto 2, mostrar en consola cada vez que se agregue un nuevo paciente "Nuevo paciente"
// useEffect(() => {
//     if(pacientes.length > 0){
//         console.log("nuevo paciente")
//     }
    
// },[pacientes])
    
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5">

        { pacientes && pacientes.length ? ( 
    <>
        <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>



        { pacientes.map( (paciente) => ( //Auqnte sea una arrow function debe tener return

            <Pacientes
            key={paciente.id}//simpre que cree una lista con map debo asinar una key a cada elemento de la lsita
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente = {eliminarPaciente}

            />
        ))}
    </>

        ) : (
            <>
            <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes {" "}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
        </p>
            
            </>
        )}

        

        
                                                                                                                                                                                                                                                                                                                                                                                                                   
        
        
    </div>
  )
}

export default ListadoPacientes;

