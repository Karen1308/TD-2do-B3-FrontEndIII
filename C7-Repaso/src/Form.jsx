import { useState } from "react";
import './App.css'

function Form({onAgregarPaciente}){
    const[nombre, setNombre]=useState("");
    const[apellido, setApellido]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (nombre && apellido) {
            onAgregarPaciente({nombre, apellido})
            setNombre("");
            setApellido("");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="formulario">
            <div>
                <label for="nombre">Ingrese su nombre:</label>
                <input type="text"  name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div>
                <label for="apellido">Ingrese su apellido:</label>
                <input type="text"  name="apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Agregar</button>
            </div>
        </form>
    )
}

export default Form;