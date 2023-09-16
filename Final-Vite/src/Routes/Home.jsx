import React, { useEffect, useState, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card'

const Home = () => {
  const { theme } = useContext(ContextGlobal);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setResult(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error al obtener los usuarios: \n", error)
    })
  },[])

  return (
      <main className={"app "+ theme }>
        <div className='title'>
          <h1>Inicio</h1>
        </div>
        <div className='card-grid'>
          {loading ? (
            <p> Obteniendo datos... </p>
          ):(
            <>
              {result.map((card) => (
                <Card key={card.id} name={card.name} username={card.username} id={card.id}></Card>
                ))}
            </>
          )}
        </div>
      </main>
  )
}

export default Home