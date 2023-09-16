import React, { useEffect, useState, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';
import "../Components/card.css"

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { theme } = useContext(ContextGlobal);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dentistaId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${dentistaId}`)
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener los datos del usuario: \n", error)
        setLoading(false);
      })
  }, [dentistaId])

  return (
    <main className={"app "+ theme }>
      <div className='title'>
        <h1> Detalle del dentista </h1>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <>
        {loading ? (
          <p> Obteniendo datos... </p>
        ) : error ? (
          <p> {error} </p>
        ) : result ? (
          <div className='card-grid'>
            <div className="card">
              <div className="content">
                <span></span>
                <div className="img">
                  <img src={`../images/img${ dentistaId % 2 == 0 ? 1 : 2}.jpg`} alt="" />
                </div>
                <h4> {result.name} </h4>
                <h6> {result.username} </h6>
                <p> <b>Tel:</b> {result.phone} </p>
                <p> <b>Correo:</b> {result.email} </p>
                <p> <b>Web:</b> {result.website} </p>
              </div>
            </div>
          </div>
        ) : (
          <p>No se encontraron datos para este dentista.</p>
        )}
      </>
    </main>
  )
}

export default Detail