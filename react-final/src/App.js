import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Shop } from "./pages/Shop/Shop.js";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/Shop-context";
import Home from './components/Home';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home/>}/>
            <Route path="/products" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Form />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;


/* 
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


            <Route path ='/' element={<Home/>}/>

            <Route path ='/products' element={<DetailsProduct/>}/>  

            <Route path ='*' element={<Home/> }/>  

          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App; 
 */
