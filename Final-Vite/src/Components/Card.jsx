import React, { useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import { Link } from "react-router-dom";
import './card.css'

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const { favorites, favDispatch } = useContext(ContextGlobal);

  const addFav = () => {
    if (!favorites.some(item => item.id === id)) {
      favDispatch({ type: 'ADD', payload: { id, name, username } });
    } else {
      favDispatch({ type: 'REMOVE', payload: { id, name, username } });
    }
  };

  return (
    <div className={"card "+ theme }>
        <div className="content">
            <span></span>
            <div className="card-fav">
              <button onClick={addFav} >
                <svg className={ favorites.some(item => item.id === id)>0  ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                </svg>
              </button>
            </div>
            <div className="img">
                <img src={`./images/img${id % 2 == 0 ? 1 : 2}.jpg`} alt=""/>
            </div>
            <h4>{name}</h4>
            <h6>{username}</h6>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae accusamus deserunt ducimus repellendus odio similique asperiores </p>
        </div>
        <div className="detalle">
          <Link to={`/dentist/${id}`}><p>Ver detalle</p></Link>
        </div>
    </div>
  );
};

export default Card;