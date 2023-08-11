import { useState } from "react";

function Form(){
    const[nombre, setNombre]=useState("")
    const[edad, setEdad]=useState(0)
    const[pokemon, setPokemon]=useState("")

    function handleNombre(e){
        setNombre(e.target.value); 
    }

    function handleEdad(e){
        setEdad(e.target.value); 
    }

    function handlePokemon(e){
        setPokemon(e.target.value); 
    }

    function registrar(e){
        e.preventDefault();
        alert(`Datos ingresados correctamente:\n 
        Nombre: ${nombre} \n
        Edad: ${edad} \n
        Pokemon: ${pokemon}`)
    }

    return(
        <div>
            <h2>Mi registro</h2>
            <form onSubmit={registrar}>
                <div>
                    <label for="nombre">Ingrese su nombre:</label>
                    <input type="text"  name="nombre" onChange={handleNombre}/>
                </div>
                <div>
                    <label for="edad">Ingrese su edad:</label>
                    <input type="text"  name="edad" onChange={handleEdad}/>
                </div>
                <div>
                    <label for="pokemon">Ingrese su pokemon:</label>
                    <input type="text"  name="pokemon" onChange={handlePokemon}/>
                </div>
                <button type="submit">  Registrar </button>
            </form>
        </div>
    )
}

export default Form;