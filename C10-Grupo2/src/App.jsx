import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [resultado, setResultado]=useState('');
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    fetch("https://api.catboys.com/baka")
    .then((response) => response.json())
    .then((data)=> {
      setResultado(data.url);
      setLoading(false);
    })
    .catch((error)=>{
      console.error("Error al obtener una respuesta:\n", error)
    })
  },[])

  return (
    <div className='App'>
      <h1> Gifs </h1>
      {loading ?(
        <p> Cargando...</p>
      ): (
        <div>
          <img src={resultado} alt="Imagen random" />
        </div>
      )}
    </div>
  )
}

export default App
