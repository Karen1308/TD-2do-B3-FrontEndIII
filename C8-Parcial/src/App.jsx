import { useState } from 'react'
import './App.css'
import Form from './Form';
import Card from './Card';

function App() {
  const [juegos, setJuego] = useState([]);
  const agregarJuego = (juego) => {
    setJuego([...juegos,juego]);
  }

  return (
    <>
    <div className='App'>
      <h1>Mis juegos favoritos</h1>
      <Form onAgregarJuego={agregarJuego}></Form>
      <Card juegos={juegos}/>
    </div>
    </>
  )
}

export default App
