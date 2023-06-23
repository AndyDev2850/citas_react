function Header() { // si necesito una sola variable en lugar de todos los props, puedo hacer destructuring 
    //function Header({variable}); sre de la otra variableolo pongo el nombre de la variable y ya podre acceder a ella, si necesito mas variables solo agrego una coma y el nomb



    return(

        <>
        
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto uppercase">
            Seguimiento Pacientes {" "}
            <span className="text-indigo-600">Veterinaria</span>
            </h1>

        </>
        
    )
}

export default Header;