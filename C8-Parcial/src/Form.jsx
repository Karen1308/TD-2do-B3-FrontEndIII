import { useState } from "react";
import Mensajes from "./Mensajes";

function Form({onAgregarJuego}){
    const[nombre, setNombre]=useState("");
    const[tipo, setTipo]=useState("");
    const[mensaje, setMensaje]=useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();
        nombre.trim();
        tipo.trim();

        if (nombre.length <= 3 || tipo.length <= 6){
            setMensaje("Por favor chequea que la información sea correcta")
        }else{
            onAgregarJuego({nombre, tipo})
            setNombre("");
            setTipo("");
            setMensaje("")
        }
    }

    return(
        <form onSubmit={handleSubmit}  className="formulario">
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text"  name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div>
                <label for="tipo">Tipo:</label>
                <input type="text"  name="tipo" value={tipo} onChange={(e)=>setTipo(e.target.value)}/>
            </div>
            <div>
                <button type="submit">Agregar</button>
            </div>
            <div>
                {mensaje!="" &&
                    <>
                        <Mensajes mensaje={mensaje}/>
                    </>
                }
            </div>
        </form>
    )
}

export default Form;