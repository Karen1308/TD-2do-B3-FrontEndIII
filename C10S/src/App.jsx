import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [dogImage, setDogImage]=useState('');
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=> {
      setDogImage(data.message);
      setLoading(false);
    })
    .catch((error)=>{
      console.error("Error al obtener una respuesta:\n", error)
    })
  },[])

  return (
    <div className='App'>
      <h1> miroperros.com </h1>
      {loading ?(
        <p> Cargando...</p>
      ): (
        <div>
          <img src={dogImage} alt="Imagen random de un perro" />
        </div>
      )}
    </div>
  )
}

export default App