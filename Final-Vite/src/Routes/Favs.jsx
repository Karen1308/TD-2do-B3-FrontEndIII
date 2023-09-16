import React, { useContext } from "react";
import { ContextGlobal } from '../Components/utils/global.context'
import Card from "../Components/Card";

const Favs = () => {
  const { favorites, theme } = useContext(ContextGlobal);
  
  return (
    <main className={"app "+ theme }>
      { favorites.length != 0 ? 
      <>
      <div className='title'>
        <h1>Dentistas Favoritos</h1>
      </div>
      <div className="card-grid">
        { favorites.map((card) => (
          <Card key={card.id} name={card.name} username={card.username} id={card.id}></Card>))}
      </div>
      </>:
      <div className="mensaje">
        <p> No se han agregado favoritos </p>
        </div>
      }
    </main>
  );
};

export default Favs;