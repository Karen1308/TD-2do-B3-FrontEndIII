import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import Home from './Routes/Home.jsx'
import Favs from './Routes/Favs.jsx'
import Contact from './Routes/Contact.jsx'
import Detail from './Routes/Detail.jsx'

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='dentist' element={<Home/>}/>
          <Route path='favs' element={<Favs/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='dentist/:dentistaId' element={<Detail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
)
