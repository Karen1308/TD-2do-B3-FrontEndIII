import { useMemo, useState } from "react";

function Memo(){
    const[numero, setNumero]=useState(10);

    const cuadrado = useMemo(() =>{
        console.log("Calculo del cuadrado");
        return numero * numero;
    }, [numero]); // La dependencia es 'numero'

    return(
        <div className="App">
            <h1> Ejemplo UseMemo</h1>
            <p>Numero: {numero} </p>
            <p>Cuadrado: {cuadrado}</p>
            <button onClick = {() => setNumero(numero + 1)}> Incrementar </button>
        </div>
    )
}

export default Memo;