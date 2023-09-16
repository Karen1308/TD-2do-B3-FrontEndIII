import React, { useContext } from "react";
import { ContextGlobal } from '../Components/utils/global.context';
import Form from '../Components/Form'

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <main className={"app "+ theme }>
      <div className='title'>
          <h1>Contacto</h1>
      </div>
      <div className={ "info " + theme }>
        <h2> ¿Quieres saber más? </h2>
        <p> Envianos tus preguntas y te contactaremos</p>
      </div>
      <Form/>
    </main>
  )
}

export default Contact