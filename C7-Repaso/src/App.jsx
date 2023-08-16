import { useState } from 'react'
import './App.css'
import Form from './Form'
import Turnos from './Turnos'

function App() {
  const [pacientes, setPaciente]= useState([]); // Nuevo estado con valor inicial que es un array
  const agregarPaciente = (paciente) =>{
    setPaciente([...pacientes,paciente]) // Se crea un nuevo array y se asigna al setter
  }

  return (
    <div className='App'>
      <h1>Registro de turnos</h1>
      <Form onAgregarPaciente={agregarPaciente}/>
      <Turnos pacientes={pacientes}/>
    </div>
  )
}

export default App
