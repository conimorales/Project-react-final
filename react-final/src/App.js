 
import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './components/Home';
import DetailsProduct from './components/DetailsProduct'

// import Inicio from './components/Inicio.js'
// import Nuevo from './components/Nuevo'

function App() {
  return (

    <BrowserRouter>
      <div className="App">


          <Routes>

            {/* <Route path ='/' element={<Nuevo/>}/> */}

            <Route path ='/' element={<Home/>}/>

            <Route path ='/products' element={<DetailsProduct/>}/>  

            {/* <Route path ='/detalle' element={<ItemDetailContainer/>}/>
            <Route path ='/detalle1' element={<ItemDetailContainer/>}/>

            <Route path ='/projects' element={<CartContainer/>}/> 
            <Route path ='*' element={<Inicio/> }/>  */}

          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App; 
