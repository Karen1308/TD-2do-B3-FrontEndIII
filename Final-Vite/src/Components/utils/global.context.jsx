import { createContext, useReducer, useEffect } from "react";

// Reducer para gestionar el tema
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return  state === 'light' ? 'dark' : 'light'
    default:
      return state ;
  }
};

// Reducer para gestionar la info
export const favoritesReducer = (state, action) => {
  switch (action.type){
    case 'ADD':
      const update = [...state, action.payload];
      localStorage.setItem('fav', JSON.stringify(update));
      return update;
    case "REMOVE":
      const filter = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('fav', JSON.stringify(filter));
      return filter;
    default:
      return state
  }
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  // Manejo de los temas 
  const initialState = localStorage.getItem("themeMode") || 'light' 
  const [theme, themeDispatch] = useReducer(themeReducer, initialState);

  useEffect(()=>{
    localStorage.setItem("themeMode", theme )
  },[theme]);

  // Manejo de los favoritos
  const favInitialState =JSON.parse(localStorage.getItem('fav')) || [];
  const [favorites, favDispatch ]= useReducer( favoritesReducer, favInitialState );

  useEffect(()=>{
    localStorage.setItem("fav", JSON.stringify(favorites))
  },[favorites]);

  const contextValue = {
    theme, themeDispatch,
    favorites, favDispatch
  }

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;