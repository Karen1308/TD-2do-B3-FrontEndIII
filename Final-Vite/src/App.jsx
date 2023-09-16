import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import ContextProvider from './Components/utils/global.context.jsx';
import './Components/utils/theme.css'

function App() { 
  return (
    <ContextProvider>
        <>
        <Navbar/>
        {
          useLocation().pathname === '/' ?
          <div className="mensaje">
            <p>Bienvenid@ a Odontologia </p>
          </div> :
          <Outlet/>
        }
        
        <Footer/>
        </>
    </ContextProvider>
  );
}

export default App;