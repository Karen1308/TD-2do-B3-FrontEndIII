import React, { useState, useContext} from "react";
import { ContextGlobal } from '../Components/utils/global.context';

const Form = () => {
  const { theme } = useContext(ContextGlobal);
  const[nombre, setNombre] = useState("");
  const[email, setEmail] = useState("");
  const[consulta, setConsulta] = useState("");
  const[mensaje, setMensaje] = useState("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    const trimmedNombre = nombre.trim();
    const trimmedEmail = email.trim();
    const trimmedConsulta = consulta.trim();

    const textError = () => {
      const regNombre = new RegExp("([a-zA-ZÀ-ÖØ-öø-ÿ]+\.?([a-zA-ZÀ-ÖØ-öø-ÿ]+\.?){3,})+\.?([[:blank:]])*");
      const regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

      if ( regNombre.exec(trimmedNombre) == null){
        return "Validando Nombre: Mínimo de 3 caracteres";
      }

      if ( regEmail.exec(trimmedEmail) == null){
        return "Validando Email: Ingrese un email válido";
      }

      if ( trimmedConsulta.length < 10 ){
        return "Validando Consulta: Mínimo de 10 caracteres";
      }
      return "";
    };

    const error = textError();

    if ( error !== "") {
      setMensaje({ tipo: "error", texto: error });
    }else {
      setMensaje({ tipo: "ok", texto: "Estimad@ " + `${nombre}` +
      " el mensaje fue enviado correctamente. \n Nos contactaremos a la brevedad" });
      setNombre("");
      setEmail("");
      setConsulta("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}  className= {"formulario "+ theme }>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text"  name="nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="consulta">Consulta:</label>
          <textarea name="consulta" value={consulta} onChange={(e)=>setConsulta(e.target.value)}/>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      { mensaje &&
      <div className={`div-${mensaje.tipo}`}>
        <p> { mensaje.texto } </p>
      </div>
      }
    </>
  );
};

export default Form;
